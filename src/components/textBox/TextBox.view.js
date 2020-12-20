import React from 'react';
import PropTypes from 'prop-types';

import classes from './textBox.module.scss';

const TextBox = ({ children }) => (
  <p className={ classes.content }>
    { children }
  </p>
);

TextBox.propTypes = { children: PropTypes.element.isRequired };

export default TextBox;
