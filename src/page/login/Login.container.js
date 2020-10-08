import React from 'react';
import LoginView from './Login.view';

const Login = () => {

  const handleLogin = ( event ) => {
    event.preventDefault();
  };

  return (
    <LoginView onLogin={ handleLogin } />
  );
};

export default Login;
