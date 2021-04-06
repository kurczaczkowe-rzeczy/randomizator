import React from 'react';
import PropTypes from 'prop-types';

import classes from 'components/button/button.module.scss';

const Button = ({
  value, type, onClick,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={ classes.button }
    type={ type }
    onClick={ onClick }
  >
    { value }
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'submit',
    'reset',
    'button',
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = { type: 'button', onClick: () => {} };

export default Button;
