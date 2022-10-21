import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { RootState } from 'store/reducers/rootReducer';
import { forceHideLoader } from 'store/actions/globalActions';
import useLocalize from 'hooks/useLocalize';

import PageContainer from 'components/PageContainer';

import ErrorPage from './ErrorPage.view';

const ErrorPageContainer = (): JSX.Element => {
  const localize = useLocalize();

  // ToDo: change to one selector with all possibly occurrence errors
  const userName = useSelector(( state: RootState ) => state.usr.errors );
  const formName = useSelector(( state: RootState ) => state.form.errors );
  const isLoading = useSelector(( state: RootState ) => state.global.isLoading );
  const dispatch = useDispatch();
  const errors = [];

  useEffect(() => {
    if ( isLoading ) {
      dispatch( forceHideLoader());
    }
  }, [ isLoading, dispatch ]);

  if ( formName ) {
    errors.push( <p key={ uuid() }>{ localize( 'errorUserFormNotExist' ) }</p> );
  }

  if ( userName ) {
    errors.push( <p key={ uuid() }>{ localize( 'errorUserNotExist' ) }</p> );
  }

  return (
    <PageContainer>
      <ErrorPage errors={ errors } />
    </PageContainer>
  );
};

export default ErrorPageContainer;
