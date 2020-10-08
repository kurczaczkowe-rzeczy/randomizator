import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';

import { db, firestore } from 'config/firebaseConfig';
import { getUserName } from 'store/actions/userActions';
import { getFormName } from 'store/actions/formAction';

import GuestPageView from 'page/guest/GuestPage.view';

const GuestPage = ({
  formName,
  getFormName,
  getUser,
  userName,
}) => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  useEffect(() => {
    getUser( pathArray[ 2 ]);
    getFormName( pathArray[ 2 ], pathArray[ 3 ]);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = ( nameMale, nameFemale ) => {
    const ans = {
      nameMale,
      nameFemale,
    };

    db.collection( pathArray[ 2 ])
      .doc( pathArray[ 3 ])
      .update({ answers: firestore.FieldValue.arrayUnion( ans ) })
      .then(() => alert( 'Dane zostały zapisane' ))
      .catch(( error ) => console.log( 'Error!', error ));
  };

  return (
    <GuestPageView
      creatorName={ userName }
      formName={formName}
      onSubmit={( nameMale, nameFemale ) => onSubmit( nameMale, nameFemale )}
    />
  );
};

GuestPage.propTypes = {
  formName: PropTypes.string,
  getFormName: PropTypes.func,
  getUser: PropTypes.func,
  userName: PropTypes.string,
};

GuestPage.defaultProps = {
  getFormName: () => {},
  getUser: () => {},
  formName: '',
  userName: '',
};

const mapStateToProps = ( state ) => ({
  userName: state.usr.userName,
  formName: state.form.formName,
});

const mapDispatchToProps = ( dispatch ) => ({
  getUser: ( id ) => dispatch( getUserName( id )),
  getFormName: ( userID, formID ) => dispatch( getFormName( userID, formID )),
});

export default connect( mapStateToProps, mapDispatchToProps )( GuestPage );
