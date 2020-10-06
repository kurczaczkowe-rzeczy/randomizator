import React, { useEffect, useState } from 'react';
// ToDo Remove react-firebase-hooks
import { useCollectionOnce, useDocumentData } from 'react-firebase-hooks/firestore';
import { useLocation } from 'react-router';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

import { db, firestore } from 'config/firebaseConfig';

import GuestPageView from 'page/guest/GuestPage.view';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserName } from 'store/actions/usersActions';

const GuestPage = ({ getUser }) => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  const [ users, setUsers ] = useState( JSON.parse( localStorage.getItem( 'user' )));
  const [ formName, setFormName ] = useState( '' );

  const [ userSnap ] = useCollectionOnce( db.collection( 'users' ));
  const [ formsSnap ] = useDocumentData( db.doc( `${ pathArray[ 2 ] }/${ pathArray[ 3 ] }` ));

  useEffect(() => {

    if ( users === null && userSnap ) {
      const usersList = {};

      userSnap.docs.forEach(( doc ) => {
        usersList[ doc.id ] = doc.data().name;
      });

      localStorage.setItem( 'user', JSON.stringify( usersList ));
      setUsers( usersList );
    }

    if ( _isEmpty( formName ) && formsSnap ) {
      getUser( pathArray[ 2 ]);

      setFormName( formsSnap.name );
    }
  }, [ formsSnap ]);// eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = ( nameMale, nameFemale ) => {
    const ans = {
      nameMale,
      nameFemale,
    };

     /*  ToDo Rewrite firestore connection with hooks */
    db.collection( pathArray[ 2 ])
      .doc( pathArray[ 3 ])
      .update({ answers: firestore.FieldValue.arrayUnion( ans ) })
      .then(() => alert( 'Dane zostały zapisane' ))
      .catch(( error ) => console.log( 'Error!', error ));
  };

  return (
    <GuestPageView
      creatorName={ _get(
        users, pathArray[ 2 ], '',
      )}
      formName={ formName }
      onSubmit={( nameMale, nameFemale ) => onSubmit( nameMale, nameFemale )}
    />
  );
};

GuestPage.propTypes = { getUser: PropTypes.func };

GuestPage.defaultProps = { getUser: () => {} };

const mapStateToProps = ( state ) => ({ users: state.usr.users });

const mapDispatchToProps = ( dispatch ) => ({ getUser: ( id ) => dispatch( getUserName( id )) });

export default connect( mapStateToProps, mapDispatchToProps )( GuestPage );
