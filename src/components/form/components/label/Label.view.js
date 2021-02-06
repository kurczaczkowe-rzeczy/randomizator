import React from 'react';
import PropTypes from 'prop-types';

import classes from './label.module.scss';
// ToDo move to global scope
const Label = ({
  content,
  required,
}) => (
  <p className={ classes.label }>
    { content }
    { required && <span>* </span> }
    :
  </p>
);

Label.propTypes = {
  content: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Label.defaultProps = { required: false };

export default Label;
