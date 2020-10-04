import React, { useEffect, useState } from 'react';
import GuestPageView from 'page/guest/GuestPage.view';
import firebase from 'config/firebaseConfig';
import { useLocation } from 'react-router';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

const GuestPage = () => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  const [ users, setUsers ] = useState( JSON.parse( localStorage.getItem( 'user' )));
  const [ formName, setFormName ] = useState( '' );

  useEffect(() => {
    if ( users === null ) {
      firebase.firestore()
        .collection( 'users' )
        .get()
        .then(( response ) => {
          const usersList = {};

          response.docs.forEach(( doc ) => {
            usersList[ doc.id ] = doc.data().name;
          });

          localStorage.setItem( 'user', JSON.stringify( usersList ));
          setUsers( usersList );
        });
    }
    if ( _isEmpty( formName )) {
      firebase.firestore()
        .collection( pathArray[ 2 ])
        .doc( pathArray[ 3 ])
        .get()
        .then(( response ) => setFormName( response.data().name ));
    }
  }, [
    formName,
    pathArray,
    users,
  ]);

  return (
    <GuestPageView
      creatorName={ _get(
        users, pathArray[ 2 ], '',
      ) } formName={formName}
    />
  );
};

export default GuestPage;
