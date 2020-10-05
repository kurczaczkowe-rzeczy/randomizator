import React from 'react';
import PropTypes from 'prop-types';

import classes from './description.module.scss';

const Description = ({ label, content }) => (
  <div className={ classes.description }>
    <p className={ classes.label }>
      { label }
      :
    </p>
    <p className={ classes.content }>
      { content }
    </p>
  </div>
);

Description.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Description;
