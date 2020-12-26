import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './textBox.module.scss';

const TextBox = ({ additionalClasses, children }) => (
  <p className={ classNames( classes.content, additionalClasses ) }>
    { children }
  </p>
);

TextBox.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClasses: PropTypes.string,
};

TextBox.defaultProps = { additionalClasses: '' };

export default TextBox;
