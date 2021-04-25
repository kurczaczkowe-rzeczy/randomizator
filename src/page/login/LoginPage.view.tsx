import Card from 'components/card';
import Button from 'components/Button';
import TextInput from 'components/form/components/textInput';

import classes from './loginPage.module.scss';
import { ILogin } from './LoginPage.types';
import useLocaleString from '../../hooks/useLocaleString';

/**
 * Page displaying login form
 */
export const Login = ({ onLogin, authError = null }: ILogin ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <div className={ classes.center }>
      <Card
        cardClass={ classes.card }
        title={ getString( 'login' ) }
        body={ (
          <>
            <form onSubmit={ onLogin } method="post">
              <TextInput
                required
                name="email"
                placeholder={ getString( 'email' ) }
                type="email"
              />
              <TextInput
                required
                name="password"
                placeholder={ getString( 'password' ) }
                type="password"
              />
              <Button value={ getString( 'login' ) } type="submit" />
            </form>
            {authError !== null && <div className={ classes.error }>{authError}</div>}
          </>
        ) }
      />
    </div>
  );
};

export default Login;
