import React from 'react';
import PropTypes from 'prop-types';

import classes from './card.module.scss';

const Card = ({ title, body }) => (
  <div className={ classes.card }>
    <h3>{ title }</h3>
    { body }
  </div>
);

Card.propTypes = {
  body: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
