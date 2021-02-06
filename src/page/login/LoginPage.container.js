import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signIn, signOut } from 'store/actions/authAction';
import CheckAuth from 'hoc/checkAuth/CheckAuth';

import LoginPageView from 'page/login/LoginPage.view';

const Login = ({
  authError,
  auth,
  signIn,
}) => {
  const handleLogin = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );

    signIn({ email: data.get( 'email' ), password: data.get( 'password' ) });
  };

  return (
    <CheckAuth path={ auth.uid }>
      <LoginPageView authError={ authError } onLogin={ handleLogin } />
    </CheckAuth>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({ uid: PropTypes.string }),
  authError: PropTypes.string,
  signIn: PropTypes.func,
};

Login.defaultProps = {
  auth: { uid: '' },
  authError: '',
  signIn: () => {},
};

export const mapStateToProps = ( state ) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});
export const mapActionToProps = ( dispatch ) => ({
  signIn: ( credential ) => dispatch( signIn( credential )),
  signOut: () => dispatch( signOut()),
});

export default connect( mapStateToProps, mapActionToProps )( Login );
