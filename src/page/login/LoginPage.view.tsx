import { SyntheticEvent } from 'react';

import Card from 'components/card/Card.view';
import Button from 'components/button/Button.view';
import TextInput from 'components/form/components/textInput/TextInput.view';
import classes from 'page/login/loginPage.module.scss';

interface ILogin{
  /**
   * Specifies the error messages when logging in fail
   */
  authError?: string | null;
  /**
   * Method for login user
   */
  onLogin: ( event: SyntheticEvent ) => void;
}

/**
 * Page displaying login form
 */
const Login = ({ onLogin, authError = null }: ILogin ): JSX.Element => (
  <div className={ classes.center }>
    <Card
      title="Zaloguj się" body={ (
        <>
          <form onSubmit={ onLogin } method="post">
            <TextInput
              required
              name="email"
              placeholder="email@example.com"
              type="email"
            />
            <TextInput
              required
              name="password"
              placeholder="password"
              type="password"
            />
            <Button value="Zaloguj się" type="submit" />
          </form>
          { authError !== null && <div className={ classes.error }>{authError}</div> }
        </>
      ) }
    />
  </div>
);

export default Login;
