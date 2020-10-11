import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import classes from './card.module.scss';

const Card = ({
  title, body, additionalClass,
}) => (
  <div className={
    classNames( classes.card,
      { [ additionalClass ]: !_isEmpty( additionalClass ) })
  }
  >
    { ( title && !_isEmpty( title )) && <h3>{ title }</h3> }
    { body }
  </div>
);

Card.propTypes = {
  body: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  additionalClass: '',
  title: '',
};

export default Card;
