import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/card/Card.view';
import _map from 'lodash/map';
import uuid from 'react-uuid';

import { ReactComponent as Unicorn } from 'assets/unicorn.svg';

import classes from './errorPage.module.scss';

const ErrorPage = ({ formName, userName }) => {
  const whatWrong = [];

  if ( formName ) {
    whatWrong.push( 'Nie istnieje taki formularz tego użytkownika' );
  }

  if ( userName ) {
    whatWrong.push( 'Nie istnieje taki użytkownik' );
  }

  const displayErrors = _map( whatWrong, ( error ) => <li key={ uuid() }>{ error }</li> );

  return (
    <>
      <div className={ classes.center }>
        <Unicorn />
        <Card
          title="Nie znaleziono strony"
          body={ <ul>{ displayErrors }</ul> }
        />
      </div>
      <div className={ classes.bottom }>
        Icons made by
        {' '}
        <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a>
        {' '}
        from
        {' '}
        <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a>
      </div>
    </>
  );
};

ErrorPage.propTypes = {
  formName: PropTypes.string,
  userName: PropTypes.string,
};

ErrorPage.defaultProps = {
  formName: '',
  userName: '',
};

const mapStateToProps = ( state ) => ({
  formName: state.form.errors,
  userName: state.usr.errors,
});

export default connect( mapStateToProps )( ErrorPage );