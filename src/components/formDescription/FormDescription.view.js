import React from 'react';
import PropTypes from 'prop-types';
import Description from '../description/Description.view';

const FormDescription = ({ content }) => (
  <Description label="Formularz" content={ content } />
);

FormDescription.propTypes = { content: PropTypes.string.isRequired };

export default FormDescription;
