import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { RootState } from 'store/reducers/rootReducer';
import { forceHideLoader } from 'store/actions/globalActions';

import ErrorPage from './ErrorPage.view';

const ErrorPageContainer = (): JSX.Element => {
  // ToDo: change to one selector with all possibly occurrence errors
  const userName = useSelector(( state: RootState ) => state.usr.errors );
  const formName = useSelector(( state: RootState ) => state.form.errors );
  const isLoading = useSelector(( state: RootState ) => state.global.isLoading );
  const dispatch = useDispatch();
  const errors = [];

  console.log( userName, formName );
  useEffect(() => {
    if ( isLoading ) {
      dispatch( forceHideLoader());
    }
  }, [ isLoading, dispatch ]);

  if ( formName ) {
    errors.push( <p key={ uuid() }>Nie istnieje taki formularz tego użytkownika</p> );
  }

  if ( userName ) {
    errors.push( <p key={ uuid() }>Nie istnieje taki użytkownik</p> );
  }

  return <ErrorPage errors={ errors } />;
};

export default ErrorPageContainer;
