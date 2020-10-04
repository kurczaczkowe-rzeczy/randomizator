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
  const [ answers, setAnswers ] = useState([]);

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
        .then(( response ) => {
          setFormName( response.data().name );
          setAnswers( response.data().answers );
        });
    }
  }, [
    formName,
    pathArray,
    users,
  ]);

  const sendForm = ( nameMale, nameFemale ) => {
    const ans = answers.push({
      nameMale,
      nameFemale,
    });

    setAnswers( ans );

    firebase.firestore().collection( pathArray[ 2 ])
      .doc( pathArray[ 3 ])
      .update({ answers })
      .then(() => alert( 'Dane zostały zapisane' ))
      .catch(( error ) => console.log( 'Error!', error ));
  };

  return (
    <GuestPageView
      creatorName={ _get(
        users, pathArray[ 2 ], '',
      ) } formName={formName}
      sendFormFunction={( nameMale, nameFemale ) => sendForm( nameMale, nameFemale )}
    />
  );
};

export default GuestPage;
