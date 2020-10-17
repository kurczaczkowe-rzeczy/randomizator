import React from 'react';
import PropTypes from 'prop-types';

import classes from './label.module.scss';

const Label = ({
  content, required, id,
}) => (
  <p className={ classes.label } id={ id }>
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
