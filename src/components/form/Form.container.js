import React from 'react';
import PropTypes from 'prop-types';

import FormView from './Form.view';

const Form = ({ onSubmit }) => {
  const handleSubmit = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );

    onSubmit( data.get( 'name_male' ), data.get( 'name_female' ));
  };

  return (
    <FormView onSubmit={ handleSubmit } />
  );
};

Form.propTypes = { onSubmit: PropTypes.func };

Form.defaultProps = { onSubmit: () => {} };

export default Form;
