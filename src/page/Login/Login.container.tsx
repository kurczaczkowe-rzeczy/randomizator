import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'store/actions/authAction';
import { RootState } from 'store/reducers/rootReducer';

import LoginPageView from './Login.view';
import { ILoginValues } from './Login.types';

const Login = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore todo look at this
  const authError = useSelector(( state: RootState ) => state.auth.authError );
  const dispatch = useDispatch();

  const handleLogin = useCallback(( data: ILoginValues ): void => {
    dispatch( signIn( data ));
  }, [ dispatch ]);

  return (
    <LoginPageView authError={ authError } onLogin={ handleLogin } />
  );
};

export default Login;
