import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const CheckAuth = ({
  isLogged,
  path,
  auth,
  children,
}) => {
  if ( !isLogged ) {
    return ( auth.uid === undefined )
      ? ( children )
      : ( <Redirect to={ `/randomizator/${ path }` } /> );
  }

  return ( auth.uid === undefined )
    ? ( <Redirect to="/randomizator/" /> )
    : ( children );

};

CheckAuth.propTypes = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.shape({ uid: PropTypes.string }),
  isLogged: PropTypes.bool,
  path: PropTypes.string,
};

CheckAuth.defaultProps = {
  auth: { uid: '' },
  isLogged: false,
  path: '',
};

export const mapStateToProps = ( state ) => ({ auth: state.firebase.auth });

export default connect( mapStateToProps )( CheckAuth );
