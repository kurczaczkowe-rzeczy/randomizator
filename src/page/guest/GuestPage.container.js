import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router';
import { connect } from 'react-redux';

import useTimeout from 'hooks/useTimeout';
import { db, firestore } from 'config/firebaseConfig';
import { getUserName } from 'store/actions/userActions';
import { getFormName } from 'store/actions/formAction';
import { APP_NAME, DELAY_FORM_NAME_HIGHLIGHT } from 'constans';

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
  const { creatorId, formId } = useParams();
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

    db.collection( creatorId )
      .doc( formId )
      .update({ answers: firestore.FieldValue.arrayUnion( ans ) }) // ToDo move to hook
      .then(() => alert( 'Dane zostały zapisane' ))
      .catch(( error ) => console.log( 'Error!', error )); // ToDo change then().catch() to async/await with try/catch
  };

  useEffect(() => {
    getUser( creatorId );
    getFormName( creatorId, formId );
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

  const redirect = ( <Redirect from="/*" to={ `${ APP_NAME }/not_found` } /> );

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
