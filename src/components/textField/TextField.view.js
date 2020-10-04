import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  classes, value, required, type,
}) => (
  <p className={ classes }>
    { value }
    { ( required && type === 'label' ) && <span>* </span> }
    { type === 'label' && ':'}
  </p>
);

TextField.propTypes = {
  classes: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'input-text', 'label' ]),
};

TextField.defaultProps = {
  required: false,
  type: 'label',
};

export default TextField;
