import React, { useEffect, useState } from 'react';
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
import { addForm } from 'store/actions/formsActions';
import { FORM_ID_KEY } from 'constans';

const Creator = ({
  name,
  addForm,
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
        if ( formID === null ) {
          setFormID( snap.docs[ 0 ].id );
          localStorage.setItem( FORM_ID_KEY, snap.docs[ 0 ].id );
        }
        snap.docs.forEach(( doc ) => {
          const form = {
            name: doc.data().name,
            id: doc.id,
          };

          addForm( form );
          const ans = doc.data().answers;

          if ( formID === doc.id ) {
            setFormName( doc.data().name, doc.id );
            getData( ans );
          }
        });
      }));

    return () => unsub();
  }, [ ]);// eslint-disable-line react-hooks/exhaustive-deps

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
        userID={ pathArray[ 2 ] }
      />
    </CheckAuth>
  );
};

Creator.propTypes = {
  addForm: PropTypes.func,
  drawResult: PropTypes.func,
  logout: PropTypes.func,
  name: PropTypes.string,
  setAnswers: PropTypes.func,
  setFormName: PropTypes.func,
};

Creator.defaultProps = {
  name: '',
  addForm: () => {
  },
  setAnswers: () => {
  },
  drawResult: () => {
  },
  setFormName: () => {
  },
  logout: () => {
  },
};

const mapStateToProps = ( state ) => ({ name: state.form.formName });

const mapDispatchToProps = ( dispatch ) => ({
  addForm: ( form ) => dispatch( addForm( form )),
  drawResult: () => dispatch( setDrawResult()),
  setAnswers: ( answers, counter ) => dispatch( setAnswers( answers, counter )),
  setFormName: ( name, id ) => dispatch( setFormName( name, id )),
  logout: () => dispatch( signOut()),
});

export default connect( mapStateToProps, mapDispatchToProps )( Creator );
