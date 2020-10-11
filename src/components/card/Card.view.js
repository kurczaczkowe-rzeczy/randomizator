import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import classes from './card.module.scss';

const Card = ({ title, body }) => (
  <div className={ classes.card }>
    { ( title && !_isEmpty( title )) && <h3>{ title }</h3> }
    { body }
  </div>
);

Card.propTypes = {
  body: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Card.defaultProps = { title: '' };

export default Card;
