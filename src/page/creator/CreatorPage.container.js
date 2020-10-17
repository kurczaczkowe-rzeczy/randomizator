import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';
import { connect } from 'react-redux';

import { db } from 'config/firebaseConfig';
import { clearDraw, setDrawResult } from 'store/actions/drawAction';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';
import { signOut } from 'store/actions/authAction';

import CheckAuth from 'hoc/checkAuth/CheckAuth';

import CreatorView from 'page/creator/CreatorPage.view';
import { addForm } from 'store/actions/formsActions';
import { FORM_ID_KEY } from 'constans';

const Creator = ({
  addForm,
  clearDraw,
  drawResult,
  setAnswers,
  setFormName,
  logout,
}) => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );
  const [ formID, setFormID ] = useState( localStorage.getItem( FORM_ID_KEY ));

  useEffect(() => {
    const unsub = db.collection( pathArray[ 2 ])
      .onSnapshot((( snap ) => {
        snap.docs.forEach(( doc ) => {
          const form = {
            name: doc.data().name,
            id: doc.id,
          };

          addForm( form );
          if ( formID === null ) {
            localStorage.setItem( FORM_ID_KEY, formID );
          }
        });
      }));

    return () => unsub();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if ( formID !== null ) {
      const unsub = db.collection( pathArray[ 2 ])
        .onSnapshot((( snap ) => {
          snap.docs.forEach(( doc ) => {
            const ans = doc.data().answers;

            if ( formID === doc.id ) {
              setFormName( doc.data().name, doc.id );
              getData( ans );
            }
          });
        }));

      return () => unsub();
    }
  }, [ formID ]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const onFormIdChange = ( formID ) => {
    setFormID( formID );
    localStorage.setItem( FORM_ID_KEY, formID );
    clearDraw();
  };

  return (
    <CheckAuth isLogged>
      <CreatorView
        onRandomClick={ drawResult }
        logout={ logout }
        userID={ pathArray[ 2 ] }
        onFormIdChange={ ( formID ) => onFormIdChange( formID ) }
      />
    </CheckAuth>
  );
};

Creator.propTypes = {
  addForm: PropTypes.func,
  clearDraw: PropTypes.func,
  drawResult: PropTypes.func,
  logout: PropTypes.func,
  setAnswers: PropTypes.func,
  setFormName: PropTypes.func,
};

Creator.defaultProps = {
  addForm: () => {},
  clearDraw: () => {},
  drawResult: () => {},
  logout: () => {},
  setAnswers: () => {},
  setFormName: () => {},
};

const mapDispatchToProps = ( dispatch ) => ({
  addForm: ( form ) => dispatch( addForm( form )),
  drawResult: () => dispatch( setDrawResult()),
  setAnswers: ( answers, counter ) => dispatch( setAnswers( answers, counter )),
  setFormName: ( name, id ) => dispatch( setFormName( name, id )),
  clearDraw: () => dispatch( clearDraw()),
  logout: () => dispatch( signOut()),
});

export default connect( null, mapDispatchToProps )( Creator );
