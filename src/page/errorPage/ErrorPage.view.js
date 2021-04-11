import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/card/Card.view';
import _map from 'lodash/map';
import uuid from 'react-uuid';

import { ReactComponent as Unicorn } from 'assets/unicorn.svg';

import Link from 'components/Link';

import classes from './errorPage.module.scss';

const ErrorPage = ({ formName, userName }) => {
  const whatWrong = []; // ToDo maybe change name

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
        <Unicorn
          width="200px"
        />
        <Card
          cardClass={ classes.card }
          title="Nie znaleziono strony"
          body={ <ul>{ displayErrors }</ul> }
        />
      </div>
      <div className={ classes.bottom }>
        Icons made by
        {' '}
        <Link
          href="https://www.flaticon.local/authors/freepik"
          title="Freepik"
          label="Freepik"
        />
        {' '}
        from
        {' '}
        <Link
          href="https://www.flaticon.local/"
          title="Flaticon"
          label="www.flaticon.local"
        />
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
