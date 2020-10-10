import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './textInput.module.scss';

const TextInput = ({
  required,
  name,
  placeholder,
  type,
  fullWidth,
}) => (
  <input
    required={ required }
    autoComplete="off"
    type={ type }
    placeholder={ placeholder }
    name={ name }
    className={ classNames( classes.inputText, { [ classes.fullWidth ]: fullWidth }) }
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
  required: false,
  type: 'text',
  fullWidth: false,
};

export default TextInput;
