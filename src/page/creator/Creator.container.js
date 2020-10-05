import React, { useEffect, useState } from 'react';
import firebase from 'config/firebaseConfig';
import CreatorView from './Creator.view';
import { useLocation } from 'react-router';
import useStateWithCallback from 'use-state-with-callback';
import _isNil from 'lodash/isNil';

const useAnswers = () => {
  const [ data, setData ] = useStateWithCallback([], ( data ) => {
    if ( data !== []) {
      setDataLoad( true );
    }
  });
  const [ dataLoad, setDataLoad ] = useState( false );
  const [ answers, setAnswers ] = useState([]);
  const history = useLocation();

  useEffect(() => {
    const pathArray = history.pathname.split( '/' );

    const unsub = firebase.collection( pathArray[ 2 ])
      .onSnapshot((( snapshot ) => {
        snapshot.docs.forEach(( doc ) => {
          const ans = doc.data().answers;

          setAnswers( ans );
          const result = getData( ans );

          setData( result );
        });
      }));

    return () => unsub();
  }, [ ]); // eslint-disable-line react-hooks/exhaustive-deps

  return [
    answers,
    data,
    dataLoad,
  ];
};

const getData = ( answers ) => {
  const result = { };

  for ( let i = 0;i < answers.length;i++ ) {
    for ( const [ key, value ] of Object.entries( answers[ i ])) {
      if ( _isNil( result[ key ])) {
        result[ key ] = [];
      }
      result[ key ].push( value );
    }
  }

  return result;
};

const Creator = () => {
  const [
    answers,
    data,
    dataLoad,
  ] = useAnswers();

  const drawResult = () => {
    console.log( answers );
    console.log( data );
  };

  return ( <CreatorView onRandomClick={drawResult} loadedData={dataLoad} /> );
};

export default Creator;
