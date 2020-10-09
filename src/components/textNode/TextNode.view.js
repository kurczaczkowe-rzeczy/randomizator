import React from 'react';
import PropTypes from 'prop-types';

const TextNode = ({
  required,
  type,
  value,
  classes,
}) => (
  <p className={ classes }>
    { value }
    {( required && type === 'label' ) && <span>* </span> }
    { type === 'label' && ':'}
  </p>
);

TextNode.propTypes = {
  classes: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.oneOf([ 'input-text', 'label' ]),
};

TextNode.defaultProps = {
  required: false,
  type: 'label',
};

export default TextNode;
