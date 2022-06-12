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
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _includes from 'lodash/includes';

import useAnswerBatch from 'hooks/useAnswerBatch';
import useTypedSelector from 'hooks/useTypedSelector';
import useTimeout from 'hooks/useTimeout';
import useLocaleString from 'hooks/useLocaleString';
import {
  forceHideLoader, hideLoader, showLoader,
} from 'store/actions/globalActions';
import { getCreatorName } from 'store/actions/userActions';
import { fetchFormName } from 'store/actions/formAction';
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

  const { addAnswer } = useAnswerBatch( creatorId, formId );

  const auth = useTypedSelector(({ firebase: { auth }}) => auth );
  const creatorName = useTypedSelector(({ usr: { creatorName }}) => creatorName );
  const form = useTypedSelector(({ firestore: { data }}) => ( data[ creatorId ] ?? data.forms )?.[ formId ] ?? {},
    _isEqual );
  const errorFormName = useTypedSelector(({ form: { errors }}) => errors );
  const errorUserName = useTypedSelector(({ usr: { errors }}) => errors );
  const loaderCaller = useTypedSelector(({ global: { loadingsQueue }}) => loadingsQueue, _isEqual );
  const dispatch = useDispatch();

  useEffect(() => {
    const notEmptyFormNameAndCreatorName = !_isEmpty( creatorName ) && !_isEmpty( form.name );

    if (( _includes( loaderCaller, PAGES.HOME ) && notEmptyFormNameAndCreatorName )
      || notEmptyFormNameAndCreatorName ) {
      dispatch( forceHideLoader());

      return;
    }

    dispatch( showLoader( PAGES.GUEST ));
  }, [
    dispatch,
    creatorName,
    form.name,
    loaderCaller,
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
    dispatch( showLoader( PAGES.GUEST, CARDS.GUEST_FORM ));

    await addAnswer(
      fields,
      () => { alert( getString( 'dataSave' )); },
      () => { alert( getString( 'sendingAnswersError' )); },
    );

    dispatch( hideLoader( PAGES.GUEST, CARDS.GUEST_FORM ));
  };

  const onBackToCreator = (): void => {
    goBack();
  };

  useEffect(() => {
    dispatch( getCreatorName( creatorId ));
    dispatch( fetchFormName( creatorId, formId ));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log( 'GuestPage ->', {});

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
