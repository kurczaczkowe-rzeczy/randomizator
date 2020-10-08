import React from 'react';
import PropTypes from 'prop-types';

import classes from './textInput.module.scss';

const TextInput = ({
  name, required, placeholder, type,
}) => (
  <input
    required={ required }
    className={ classes[ 'input-text' ] }
    type={type}
    placeholder={placeholder}
    name={ name }
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
  required: false,
  type: 'text',
};

export default TextInput;
