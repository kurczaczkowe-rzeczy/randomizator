import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';

import FormView from './Form.view';

const Form = ({
  preview,
  nameOfForm,
  onSubmit,
  additionalFunction,
}) => {
  /* ToDo use constants instead of hardcoded strings */
  const handleSubmit = useCallback(( event ) => {
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
  }, [ nameOfForm, onSubmit ]);

  return (
    <FormView
      preview={ preview }
      nameOfForm={ nameOfForm }
      onSubmit={ handleSubmit }
      additionalFunction={ additionalFunction }
    />
  );
};

Form.propTypes = {
  additionalFunction: PropTypes.func,
  nameOfForm: PropTypes.string,
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  nameOfForm: '',
  preview: false,
  additionalFunction: () => {},
  onSubmit: () => {},
};

const mapStateToProps = ( state ) => ({ nameOfForm: state.form.formName });

export default connect( mapStateToProps )( Form );
