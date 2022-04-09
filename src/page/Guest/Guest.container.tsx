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
import { useDispatch } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';
import _isEqual from 'lodash/isEqual';

import useTypedSelector from 'hooks/useTypedSelector';
import useTimeout from 'hooks/useTimeout';
import useLocaleString from 'hooks/useLocaleString';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { getCreatorName } from 'store/actions/userActions';
import { fetchFormName } from 'store/actions/formAction';
import { createAnswer } from 'utils/answersUtils';
import {
  APP_NAME_SUFFIX,
  CARDS,
  DELAY_FORM_NAME_HIGHLIGHT,
  PAGES,
} from 'constans';

import PageContainer from 'components/PageContainer';

import GuestView from './Guest.view';
import { IGuest } from './Guest.types';

const GuestPage = (): JSX.Element => {
  const getString = useLocaleString();
  const { goBack } = useHistory();
  const { creatorId, formId } = useParams<{[ key: string ]: string }>();
  const [ isHighlighted, setIsHighlighted ] = useState( false );
  const { runTimeout, stopTimeout } = useTimeout( DELAY_FORM_NAME_HIGHLIGHT );

  const {
    doc,
    FieldValue,
    batch: firestoreBatch,
  } = useFirestore();

  const auth = useTypedSelector(({ firebase: { auth }}) => auth );
  const creatorName = useTypedSelector(({ usr: { creatorName }}) => creatorName );
  const form = useTypedSelector(({ firestore: { data }}) => ( data[ creatorId ] ?? data.forms )?.[ formId ] ?? {},
    _isEqual );
  const errorFormName = useTypedSelector(({ form: { errors }}) => errors );
  const errorUserName = useTypedSelector(({ usr: { errors }}) => errors );
  const dispatch = useDispatch();

  useEffect(() => {
    const action = _isEmpty( creatorName ) || _isEmpty( form.name ) ? showLoader : hideLoader;

    dispatch( action( PAGES.GUEST_PAGE ));
  }, [
    dispatch,
    creatorName,
    form.name,
  ]);

  const highlightFormName = useCallback(( event ) => {
    const { target: { value }} = event;

    if ( value === form.name ) {
      return stopTimeout(() => setIsHighlighted( false ));
    }

    return runTimeout(() => setIsHighlighted( true ));
  }, [
    form.name,
    runTimeout,
    stopTimeout,
  ]);

  const onSubmit: IGuest[ 'onSubmit' ] = async ( fields ): Promise< void > => {
    dispatch( showLoader( PAGES.GUEST_PAGE, CARDS.GUEST_FORM ));
    const formRef = doc( `${ creatorId }/${ formId }` );
    const answersRef = formRef.collection( 'answers' ).doc();
    const fieldsRef = answersRef.collection( 'fields' );

    const answers = createAnswer(
      fields,
      formId,
      answersRef.id,
    );

    try {
      const batch = firestoreBatch();

      _forEach( answers, ( answer ) => {
        batch.set( fieldsRef.doc(), answer );
      });

      batch.update( formRef, { counter: FieldValue.increment( 1 ) });
      await batch.commit();
    } catch ( e: unknown ) {
      // ToDo: Better error handling
      console.error( 'Guest container submit:', e );
      alert( getString( 'guestFormSubmittingError' ));

      return;
    } finally {
      dispatch( hideLoader( PAGES.GUEST_PAGE, CARDS.GUEST_FORM ));
    }

    alert( getString( 'dataSave' ));
  };

  const onBackToCreator = (): void => {
    goBack();
  };

  useEffect(() => {
    dispatch( getCreatorName( creatorId ));
    dispatch( fetchFormName( creatorId, formId ));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ( errorFormName || errorUserName )
    ? <Redirect from="/*" to={ `${ APP_NAME_SUFFIX }/not_found` } />
    : (
      <PageContainer>
        <GuestView
          creatorName={ creatorName }
          form={ form }
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
