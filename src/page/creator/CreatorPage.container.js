import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';
import { connect } from 'react-redux';

import { db } from 'config/firebaseConfig';
import { setDrawResult } from 'store/actions/drawAction';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';
import { signOut } from 'store/actions/authAction';

import CheckAuth from 'hoc/checkAuth/CheckAuth';

import CreatorView from 'page/creator/CreatorPage.view';

const Creator = ({
  name,
  drawResult,
  setAnswers,
  setFormName,
  logout,
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

    _forEach( answers, ( answer ) => {
      _forEach( answer, ( value, key ) => {
        if ( _isNil( result[ key ])) {
          result[ key ] = [];
        }
        result[ key ].push( value );
      });
    });

    setAnswers( result, answers.length );
  };

  return (
    <CheckAuth isLogged>
      <CreatorView
        name={ name }
        onRandomClick={ drawResult }
        logout={ logout }
      />
    </CheckAuth>
  );
};

Creator.propTypes = {
  drawResult: PropTypes.func,
  logout: PropTypes.func,
  name: PropTypes.string,
  setAnswers: PropTypes.func,
  setFormName: PropTypes.func,
};

Creator.defaultProps = {
  name: '',
  setAnswers: () => {},
  drawResult: () => {},
  setFormName: () => {},
  logout: () => {},
};

const mapStateToProps = ( state ) => ({ name: state.form.formName });

const mapDispatchToProps = ( dispatch ) => ({
  drawResult: () => dispatch( setDrawResult()),
  setAnswers: ( answers, counter ) => dispatch( setAnswers( answers, counter )),
  setFormName: ( id ) => dispatch( setFormName( id )),
  logout: () => dispatch( signOut()),
});

export default connect( mapStateToProps, mapDispatchToProps )( Creator );
