import Card from 'components/card';
import Button from 'components/Button';
import TextInput from 'components/form/components/textInput';

import classes from './loginPage.module.scss';
import { ILogin } from './LoginPage.types';

/**
 * Page displaying login form
 */
export const Login = ({ onLogin, authError = null }: ILogin ): JSX.Element => (
  <div className={ classes.center }>
    <Card
      cardClass={ classes.card }
      title="Zaloguj się"
      body={ (
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
