import React, {
  useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router';
import { connect } from 'react-redux';
import { DELAY_FORM_NAME_HIGHLIGHT } from 'constans';

import useTimeout from 'hooks/useTimeout';
import { db, firestore } from 'config/firebaseConfig';
import { getUserName } from 'store/actions/userActions';
import { getFormName } from 'store/actions/formAction';

import GuestPageView from 'page/guest/GuestPage.view';

const GuestPage = ({
  userName,
  formName,
  getUser,
  getFormName,
  errorFormName,
  errorUserName,
}) => {
  /* ToDo use constants instead of hardcoded strings */
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );
  const [ isHighlighted, setIsHighlighted ] = useState( false );
  const { runTimeout, stopTimeout } = useTimeout( DELAY_FORM_NAME_HIGHLIGHT );

  const highlightFormName = useCallback(( event ) => {
    const { target: { value }} = event;

    if ( value === formName ) {
      return stopTimeout(() => setIsHighlighted( false ));
    }

    return runTimeout(() => setIsHighlighted( true ));
  }, [
    formName,
    runTimeout,
    stopTimeout,
  ]);

  const onSubmit = ( nameMale, nameFemale ) => {
    const ans = {
      nameMale,
      nameFemale,
    };

    db.collection( pathArray[ 2 ])
      .doc( pathArray[ 3 ])
      .update({ answers: firestore.FieldValue.arrayUnion( ans ) })
      .then(() => alert( 'Dane zostały zapisane' ))
      .catch(( error ) => console.log( 'Error!', error ));
  };

  useEffect(() => {
    getUser( pathArray[ 2 ]);
    getFormName( pathArray[ 2 ], pathArray[ 3 ]);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const displayPage = (
    <GuestPageView
      creatorName={ userName }
      formName={ formName }
      isHighlighted={ isHighlighted }
      highlightFormName={ highlightFormName }
      onSubmit={ ( nameMale, nameFemale ) => onSubmit( nameMale, nameFemale ) }
    />
  );

  const redirect = ( <Redirect from="/*" to="/randomizator/not_found" /> );

  return ( errorFormName || errorUserName ) ? redirect : displayPage;

};

GuestPage.propTypes = {
  errorFormName: PropTypes.string,
  errorUserName: PropTypes.string,
  formName: PropTypes.string,
  getFormName: PropTypes.func,
  getUser: PropTypes.func,
  userName: PropTypes.string,
};

GuestPage.defaultProps = {
  getFormName: () => {},
  getUser: () => {},
  formName: '',
  userName: '',
  errorFormName: '',
  errorUserName: '',
};

const mapStateToProps = ( state ) => ({
  userName: state.usr.userName,
  formName: state.form.formName,
  errorFormName: state.form.errors,
  errorUserName: state.usr.errors,
});

const mapDispatchToProps = ( dispatch ) => ({
  getUser: ( id ) => dispatch( getUserName( id )),
  getFormName: ( userID, formID ) => dispatch( getFormName( userID, formID )),
});

export default connect( mapStateToProps, mapDispatchToProps )( GuestPage );
