import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';
import Button from 'components/form/components/button/Button.view';
import TextInput from 'components/form/components/textInput/TextInput.view';
import classes from 'page/login/loginPage.module.scss';

const Login = ({ onLogin, authError }) => (
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

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

Login.defaultProps = { authError: '' };

export default Login;
