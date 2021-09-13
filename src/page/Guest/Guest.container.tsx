import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Redirect,
  useParams,
  useHistory,
} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import useTimeout from 'hooks/useTimeout';
import useLocaleString from 'hooks/useLocaleString';
import { db, firestore } from 'config/firebaseConfig';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { getCreatorName } from 'store/actions/userActions';
import { fetchFormName } from 'store/actions/formAction';
import { RootState } from 'store/reducers/rootReducer';
import { APP_SUFFIX, DELAY_FORM_NAME_HIGHLIGHT } from 'constans';

import PageContainer from 'components/PageContainer';

import GuestView from './Guest.view';
import { createFieldsCollection } from './Guest.utils';
import { IGuest } from './Guest.types';

const GuestPage = (): JSX.Element => {
  const getString = useLocaleString();
  const { goBack } = useHistory();

  const auth = useSelector(( state: RootState ) => state.firebase.auth );
  const creatorName = useSelector(( state: RootState ) => state.usr.creatorName );
  const formName = useSelector(( state: RootState ) => state.form.name );
  const errorFormName = useSelector(( state: RootState ) => state.form.errors );
  const errorUserName = useSelector(( state: RootState ) => state.usr.errors );
  const dispatch = useDispatch();

  /* ToDo use constants instead of hardcoded strings */
  const { creatorId, formId } = useParams<{[key: string]: string }>();
  const [ isHighlighted, setIsHighlighted ] = useState( false );
  const { runTimeout, stopTimeout } = useTimeout( DELAY_FORM_NAME_HIGHLIGHT );

  useEffect(() => {
    if ( _isEmpty( creatorName ) || _isEmpty( formName )) {
      dispatch( showLoader( 'GUEST_PAGE' ));
    } else {
      dispatch( hideLoader( 'GUEST_PAGE' ));
    }
  }, [
    dispatch,
    creatorName,
    formName,
  ]);

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

  const onSubmit: IGuest[ 'onSubmit' ] = ( fields ): void => {
    const ans = { fields: createFieldsCollection( fields ) };

    db.collection( creatorId )
      .doc( formId )
      .update({ answers: firestore.FieldValue.arrayUnion( ans ) }) // ToDo move to hook
      .then(() => alert( getString( 'dataSave' )))
      .catch(( error ) => console.log( 'Error!', error )); // ToDo change then().catch() to async/await with try/catch
  };

  const onBackToCreator = (): void => {
    goBack();
  };

  useEffect(() => {
    dispatch( getCreatorName( creatorId ));
    dispatch( fetchFormName( creatorId, formId ));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ( errorFormName || errorUserName )
    ? <Redirect from="/*" to={ `${ APP_SUFFIX }/not_found` } />
    : (
      <PageContainer>
        <GuestView
          creatorName={ creatorName }
          formName={ formName }
          isCreator={ !!auth.uid }
          isHighlighted={ isHighlighted }
          highlightFormName={ highlightFormName }
          onBackToCreator={ onBackToCreator }
          onSubmit={ onSubmit }
        />
      </PageContainer>
    );
};

export default GuestPage;
