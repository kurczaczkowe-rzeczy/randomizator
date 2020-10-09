import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import _isNil from 'lodash/isNil';

import { db } from 'config/firebaseConfig';

import CreatorView from 'page/creator/CreatorPage.view';
import { setDrawResult } from 'store/actions/drawAction';
import { connect } from 'react-redux';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';

const Creator = ({
  setDrawResult,
  setAnswers,
  isLoaded,
  setFormName,
  name,
}) => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  useEffect(() => {
    const unsub = db.collection( pathArray[ 2 ])
      .onSnapshot((( snapshot ) => {
        snapshot.docs.forEach(( doc ) => {
          const ans = doc.data().answers;

          setFormName( doc.data().name );
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
    setDrawResult();
  };

  return ( <CreatorView loadedData={ isLoaded } onRandomClick={ drawResult } name={ name } /> );
};

Creator.propTypes = {
  isLoaded: PropTypes.bool,
  name: PropTypes.string,
  setAnswers: PropTypes.func,
  setDrawResult: PropTypes.func,
  setFormName: PropTypes.func,
};

Creator.defaultProps = {
  isLoaded: false,
  name: '',
  setAnswers: () => {},
  setDrawResult: () => {},
  setFormName: () => {},
};

const mapStateToProps = ( state ) => ({
  isLoaded: state.ans.isLoaded,
  name: state.form.formName,
});

const mapDispatchToProps = ( dispatch ) => ({
  setDrawResult: () => dispatch( setDrawResult()),
  setAnswers: ( answers ) => dispatch( setAnswers( answers )),
  setFormName: ( id ) => dispatch( setFormName( id )),
});

export default connect( mapStateToProps, mapDispatchToProps )( Creator );
