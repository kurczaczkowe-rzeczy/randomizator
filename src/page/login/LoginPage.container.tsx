import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'store/actions/authAction';
import { RootState } from 'store/reducers/rootReducer';

import LoginPageView from 'page/login/LoginPage.view';

const Login = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore todo look at this
  const authError = useSelector(( state: RootState ) => state?.auth.authError );
  const dispatch = useDispatch();

  const handleLogin = ( event: SyntheticEvent ): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    dispatch( signIn({ email, password }));
  };

  return (
    <LoginPageView authError={ authError } onLogin={ handleLogin } />
  );
};

export default Login;
