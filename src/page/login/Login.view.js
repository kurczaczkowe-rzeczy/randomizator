import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card/Card.view';
import classes from './login.module.scss';
import Button from 'components/form/components/button/Button.view';
import TextInput from 'components/form/components/textInput/TextInput.view';

const Login = ({ onLogin }) => (
  <div className={classes.center}>
    <Card
      title="Zaloguj się" body={(
        <form onSubmit={onLogin} method="post">
          <TextInput
            name="email"
            placeholder="email@example.com"
            type="email"
            required
          />
          <TextInput
            name="password"
            placeholder="password"
            type="password"
            required
          />
          <Button value="Zaloguj się" type="submit" />
        </form>
      )}
    />
  </div>
);

Login.propTypes = { onLogin: PropTypes.func.isRequired };

export default Login;
