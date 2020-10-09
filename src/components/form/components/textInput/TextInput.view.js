import React from 'react';
import PropTypes from 'prop-types';

import classes from './textInput.module.scss';

const TextInput = ({
  required,
  name,
  placeholder,
  type,
}) => (
  <input
    required={ required }
    type={ type }
    placeholder={ placeholder }
    name={ name }
    className={ classes[ 'input-text' ] }
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
