import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import _isNil from 'lodash/isNil';

import { db } from 'config/firebaseConfig';

import CreatorView from 'page/creator/CreatorPage.view';
import { setDrawResult } from 'store/actions/drawAction';
import { connect } from 'react-redux';
import { setAnswers } from 'store/actions/answersAction';

const Creator = ({
  tags, setDrawResult, setAnswers, answers, isLoaded,
}) => {
  const [ result, setResult ] = useState({ nameFemale: '', nameMale: '' });
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  useEffect(() => {
    const unsub = db.collection( pathArray[ 2 ])
      .onSnapshot((( snapshot ) => {
        snapshot.docs.forEach(( doc ) => {
          const ans = doc.data().answers;

          getData( ans );
        });
      }));

    return () => unsub();
  }, [ ]); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = ( answers ) => {
    const result = {};

    for ( let i = 0;i < answers.length;i++ ) {
      for ( const [ key, value ] of Object.entries( answers[ i ])) {
        if ( _isNil( result[ key ])) {
          result[ key ] = [];
        }
        result[ key ].push( value );
      }
    }
    setAnswers( result );
  };

  const drawResult = () => {
    const draw = { };

    setDrawResult( tags );

    for ( const [ key, value ] of Object.entries( answers )) {
      draw[ key ] = value[ Math.floor( Math.random() * value.length ) ];
    }
    setResult( draw );
  };

  return ( <CreatorView loadedData={ isLoaded } result={ result } onRandomClick={ drawResult } /> );
};

const mapStateToProps = ( state ) => ({
  result: state.draw.result,
  tags: state.draw.tags,
  answers: state.ans.answers,
  isLoaded: state.ans.isLoaded,
});

const mapDispatchToProps = ( dispatch ) => ({
  setDrawResult: () => dispatch( setDrawResult()),
  setAnswers: ( answers ) => dispatch( setAnswers( answers )),
});

export default connect( mapStateToProps, mapDispatchToProps )( Creator );
