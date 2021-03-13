import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signIn } from 'store/actions/authAction';

import LoginPageView from 'page/login/LoginPage.view';

const Login = ({
  authError,
  signIn,
}) => {
  const handleLogin = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );

    signIn({ email: data.get( 'email' ), password: data.get( 'password' ) });
  };

  return (
    <LoginPageView authError={ authError } onLogin={ handleLogin } />
  );
};

Login.propTypes = {
  authError: PropTypes.string,
  signIn: PropTypes.func,
};

Login.defaultProps = {
  authError: '',
  signIn: () => {},
};

export const mapStateToProps = ( state ) => ({ authError: state.auth.authError });
export const mapActionToProps = ( dispatch ) => ({ signIn: ( credential ) => dispatch( signIn( credential )) });

export default connect( mapStateToProps, mapActionToProps )( Login );
