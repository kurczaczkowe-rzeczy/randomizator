import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { RootState } from 'store/reducers/rootReducer';
import { forceHideLoader } from 'store/actions/globalActions';

import ErrorPage from './ErrorPage.view';
import useLocaleString from '../../hooks/useLocaleString';

const ErrorPageContainer = (): JSX.Element => {
  const getString = useLocaleString();

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
    errors.push( <p key={ uuid() }>{ getString( 'errorUserFormNotExist' ) }</p> );
  }

  if ( userName ) {
    errors.push( <p key={ uuid() }>{ getString( 'errorUserNotExist' ) }</p> );
  }

  return <ErrorPage errors={ errors } />;
};

export default ErrorPageContainer;
