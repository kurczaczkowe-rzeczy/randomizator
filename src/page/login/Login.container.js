import React from 'react';
import LoginView from './Login.view';

const Login = () => {

  const handleLogin = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );

    console.log( data.get( 'email' ), data.get( 'password' ));
  };

  return (
    <LoginView onLogin={ handleLogin } />
  );
};

export default Login;
