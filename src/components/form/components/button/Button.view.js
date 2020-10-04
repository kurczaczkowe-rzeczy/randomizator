import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.scss';

const Button = ({ value, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={ classes.button } type={ type }>{ value }</button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'submit',
    'reset',
    'button',
  ]),
};

Button.defaultProps = { type: 'button' };

export default Button;
