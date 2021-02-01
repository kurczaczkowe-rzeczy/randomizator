import React from 'react';
import PropTypes from 'prop-types';

import classes from './description.module.scss';
// ToDo refactor
const Description = ({ label, content }) => (
  <div>
    <p className={ classes.label }>
      { label }
      :
    </p>
    { content }
  </div>
);

Description.propTypes = {
  content: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default Description;
