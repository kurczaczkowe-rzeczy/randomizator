import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginPageView from 'page/login/LoginPage.view';
import { signIn, signOut } from 'store/actions/authAction';
import { Redirect } from 'react-router';

const Login = ({
  signIn, authError, auth,
}) => {

  const handleLogin = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );

    signIn({ email: data.get( 'email' ), password: data.get( 'password' ) });
  };

  return !auth.auth.uid
    ? (
      <LoginPageView onLogin={ handleLogin } authError={ authError } />
    )
    : ( <Redirect to={ `/randomizator/${ auth.auth.uid }` } /> );
};

Login.propTypes = {
  auth: PropTypes.shape({
    auth: PropTypes.shape({ uid: PropTypes.string }),
    push: PropTypes.func,
  }),
  authError: PropTypes.string,
  signIn: PropTypes.func,
};

Login.defaultProps = {
  auth: {
    auth: '',
    push: () => {},
  },
  authError: '',
  signIn: () => {},
};

export const mapStateToProps = ( state ) => ({ authError: state.auth.authError, auth: state.firebase });
export const mapActionToProps = ( dispatch ) => ({
  signIn: ( credential ) => dispatch( signIn( credential )),
  signOut: () => dispatch( signOut()),
});

export default connect( mapStateToProps, mapActionToProps )( Login );
