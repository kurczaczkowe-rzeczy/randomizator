import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import { ICard } from 'components/card/Card.types';

import classes from './card.module.scss';

const Card = ({
  title,
  cardClass = '',
  body,
  id,
}: ICard ): JSX.Element => {
  let titleId = undefined;
  let titleContent = title;

  if ( typeof title !== 'string' && title ) {
    titleId = title.id;
    titleContent = title.content;
  }

  return (
    <div
      className={ classNames( classes.card, { [ cardClass ]: !_isEmpty( cardClass ) }) }
      id={ id }
    >
      { ( title && !_isEmpty( title )) && <h3 id={ titleId }>{ titleContent }</h3> }
      { body }
    </div>
  );
};

export default Card;
