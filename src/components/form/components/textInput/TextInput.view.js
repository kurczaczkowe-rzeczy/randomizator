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
  onChange,
  onFocus,
}) => (
  <input
    required={ required }
    autoComplete="off"
    type={ type }
    placeholder={ placeholder }
    name={ name }
    className={ classNames( classes.inputText, { [ classes.fullWidth ]: fullWidth }) }
    onChange={ onChange }
    onFocus={ onFocus }
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

TextInput.defaultProps = {
  placeholder: '',
  required: false,
  type: 'text',
  fullWidth: false,
  onChange: () => {},
  onFocus: () => {},
};

export default TextInput;
