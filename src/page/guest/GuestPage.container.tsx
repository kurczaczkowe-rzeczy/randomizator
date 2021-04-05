import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import useTimeout from 'hooks/useTimeout';
import { db, firestore } from 'config/firebaseConfig';
import { getUserName } from 'store/actions/userActions';
import { fetchFormName } from 'store/actions/formAction';
import { RootState } from 'store/reducers/rootReducer';
import { APP_NAME, DELAY_FORM_NAME_HIGHLIGHT } from 'constans';

import GuestPageView from './GuestPage.view';

const GuestPage = (): JSX.Element => {

  const userName = useSelector(( state: RootState ) => state?.usr.userName );
  const formName = useSelector(( state: RootState ) => state?.form.name );
  const errorFormName = useSelector(( state: RootState ) => state?.form.errors );
  const errorUserName = useSelector(( state: RootState ) => state?.usr.errors );
  const dispatch = useDispatch();

  /* ToDo use constants instead of hardcoded strings */
  const { creatorId, formId } = useParams<{[key: string]: string }>();
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

  const onSubmit = ( nameMale: string, nameFemale: string ): void => {
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
    dispatch( getUserName( creatorId ));
    dispatch( fetchFormName( creatorId, formId ));
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

export default GuestPage;
