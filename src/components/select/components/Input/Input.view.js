import React from 'react';
import PropTypes from 'prop-types';
import InputUI from '@material-ui/core/Input';

const Input = ({ placeholder }) => (
  <InputUI placeholder={ placeholder } />
);

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
