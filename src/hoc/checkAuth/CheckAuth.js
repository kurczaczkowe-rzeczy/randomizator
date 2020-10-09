import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const CheckAuth = ({
  children, path, isLogged, auth,
}) => {
  if ( !isLogged ) {
    return ( auth.auth.uid === undefined )
      ? ( children )
      : ( <Redirect to={ `/randomizator/${ path }` } /> );
  }

  return ( auth.auth.uid === undefined )
    ? ( <Redirect to="/randomizator/" /> )
    : ( children );

};

CheckAuth.propTypes = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.shape({
    auth: PropTypes.shape({ uid: PropTypes.string }),
    push: PropTypes.func,
  }),
  isLogged: PropTypes.bool,
  path: PropTypes.string,
};

CheckAuth.defaultProps = {
  auth: {
    auth: { uid: '' },
    push: () => {
    },
  },
  isLogged: false,
  path: '',
};

export const mapStateToProps = ( state ) => ({ auth: state.firebase });

export default connect( mapStateToProps )( CheckAuth );
