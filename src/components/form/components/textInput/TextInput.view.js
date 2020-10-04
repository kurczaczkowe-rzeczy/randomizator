import React from 'react';
import PropTypes from 'prop-types';
import classes from './textInput.module.scss';

const TextInput = ({ required }) => (
  <input className={ classes[ 'input-text' ] } type="text" required={required} />
);

TextInput.propTypes = { required: PropTypes.bool };

TextInput.defaultProps = { required: false };

export default TextInput;
