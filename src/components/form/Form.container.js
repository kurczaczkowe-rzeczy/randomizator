import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';

import FormView from './Form.view';

const Form = ({
  preview,
  nameOfForm,
  onSubmit,
}) => {
  const handleSubmit = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );
    const fromInput = data.get( 'check_is_not_robot' );

    if ( _isEmpty( fromInput )) {
      alert( 'Wpisz nazwę formularza we właściwym miejscu' );
    } else if ( !_isEqual( fromInput, nameOfForm )) {
      alert( 'Wpisz poprawną nazwę formularza' );
    } else {
      onSubmit( data.get( 'name_male' ), data.get( 'name_female' ));
    }
  };

  return (
    <FormView
      preview={ preview }
      nameOfForm={ nameOfForm }
      onSubmit={ handleSubmit }
    />
  );
};

Form.propTypes = {
  nameOfForm: PropTypes.string,
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  nameOfForm: '',
  preview: false,
  onSubmit: () => {},
};

const mapStateToProps = ( state ) => ({ nameOfForm: state.form.formName });

export default connect( mapStateToProps )( Form );
