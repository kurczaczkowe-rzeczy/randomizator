import React from 'react';
import PropTypes from 'prop-types';

import FormView from './Form.view';

const Form = ({ preview, onSubmit }) => {
  const handleSubmit = ( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );

    onSubmit( data.get( 'name_male' ), data.get( 'name_female' ));
  };

  return (
    <FormView preview={ preview } onSubmit={ handleSubmit } />
  );
};

Form.propTypes = {
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
  preview: false,
};

export default Form;
