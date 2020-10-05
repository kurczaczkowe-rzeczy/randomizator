import React, { useEffect, useState } from 'react';
// ToDo Remove react-firebase-hooks
import { useCollectionOnce, useDocumentData } from 'react-firebase-hooks/firestore';
import { useLocation } from 'react-router';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

import firebase from 'config/firebaseConfig';

import GuestPageView from 'page/guest/GuestPage.view';

const GuestPage = () => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  const [ users, setUsers ] = useState( JSON.parse( localStorage.getItem( 'user' )));
  const [ formName, setFormName ] = useState( '' );
  const [ answers, setAnswers ] = useState([]);

  const [ userSnap ] = useCollectionOnce( firebase.collection( 'users' ));
  const [ formsSnap ] = useDocumentData( firebase.doc( `${ pathArray[ 2 ] }/${ pathArray[ 3 ] }` ));

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
      setFormName( formsSnap.name );
      setAnswers( formsSnap.answers );
    }
  }, [
    formName,
    formsSnap,
    pathArray,
    userSnap,
    users,
  ]);

  const onSubmit = ( nameMale, nameFemale ) => {
    setAnswers([ ...answers, { nameMale, nameFemale }]);
    // ToDo Rewrite firestore connection with hooks
    firebase.collection( pathArray[ 2 ])
      .doc( pathArray[ 3 ])
      .update({ answers })
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

export default GuestPage;
