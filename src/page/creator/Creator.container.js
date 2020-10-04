import React, { useEffect, useState } from 'react';
import firebase from 'config/firebaseConfig';
import CreatorView from './Creator.view';
import { useLocation } from 'react-router';
import useStateWithCallback from 'use-state-with-callback';

const useAnswers = () => {

  const [ load, setLoad ] = useState( false );
  const [ answers, setAnswers ] = useStateWithCallback([], ( answers ) => {
    setLoad( answers.length > 0 );
  });
  const history = useLocation();

  useEffect(() => {
    const pathArray = history.pathname.split( '/' );

    const unsub = firebase.collection( pathArray[ 2 ])
      .onSnapshot((( snapshot ) => {
        snapshot.docs.forEach(( doc ) => {
          setAnswers( doc.data().answers );
        });
      }));

    return () => unsub();
  }, [ ]); // eslint-disable-line react-hooks/exhaustive-deps

  return [ answers, load ];
};

const Creator = () => {
  const [ anws, load ] = useAnswers();

  const drawResult = () => {
    console.log( anws );
    console.log( load );
  };

  return ( <CreatorView onRandomClick={drawResult} loadedData={load} /> );
};

export default Creator;
