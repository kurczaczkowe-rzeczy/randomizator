import React from 'react';
import PropTypes from 'prop-types';
import classes from './textInput.module.scss';

const TextInput = ({ name, required }) => (
  <input
    className={ classes[ 'input-text' ] }
    type="text"
    name={name}
    required={required}
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

TextInput.defaultProps = { required: false };

export default TextInput;
