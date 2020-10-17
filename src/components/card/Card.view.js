import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import classes from './card.module.scss';

const Card = ({
  title, body, cardClass,
}) => (
  <div className={
    classNames( classes.card,
      { [ cardClass ]: !_isEmpty( cardClass ) })
  }
  >
    { ( title && !_isEmpty( title )) && <h3>{ title }</h3> }
    { body }
  </div>
);

Card.propTypes = {
  body: PropTypes.node.isRequired,
  cardClass: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  cardClass: '',
  title: '',
};

export default Card;
