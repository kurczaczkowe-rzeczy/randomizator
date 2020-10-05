import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import useStateWithCallback from 'use-state-with-callback';
import _isNil from 'lodash/isNil';
import _isEmpty from 'lodash/isEmpty';

import firebase from 'config/firebaseConfig';

import CreatorView from './Creator.view';

const useAnswers = () => {
  const [ data, setData ] = useStateWithCallback([], ( data ) => {
    if ( _isEmpty( data )) {
      setDataLoad( true );
    }
  });
  const [ dataLoad, setDataLoad ] = useState( false );
  const history = useLocation();

  useEffect(() => {
    const pathArray = history.pathname.split( '/' );

    const unsub = firebase.collection( pathArray[ 2 ])
      .onSnapshot((( snapshot ) => {
        snapshot.docs.forEach(( doc ) => {
          const ans = doc.data().answers;
          const result = getData( ans );

          setData( result );
        });
      }));

    return () => unsub();
  }, [ ]); // eslint-disable-line react-hooks/exhaustive-deps

  return [ data, dataLoad ];
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
  const [ data, dataLoad ] = useAnswers();

  const [ result, setResult ] = useState({ });

  const drawResult = () => {
    const draw = { };

    for ( const [ key, value ] of Object.entries( data )) {
      draw[ key ] = value[ Math.floor( Math.random() * value.length ) ];
    }
    setResult( draw );
  };

  return ( <CreatorView loadedData={ dataLoad} result={ result } onRandomClick={ drawResult } /> );
};

export default Creator;
