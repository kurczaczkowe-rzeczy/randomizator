import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import { ICard } from 'components/card/Card.types';

import useStyles from './Card.styles';

/** Box that warps other components. */
const Card = ({
  title,
  cardClass = '',
  body,
  id,
}: ICard ): JSX.Element => {
  const styles = useStyles();
  let titleId = undefined;
  let titleContent = title;

  if ( typeof title !== 'string' && title ) {
    titleId = title.id;
    titleContent = title.content;
  }

  return (
    <div
      className={ classNames( styles.card, { [ cardClass ]: !_isEmpty( cardClass ) }) }
      id={ id }
    >
      { ( title && !_isEmpty( title )) && <h3 id={ titleId }>{ titleContent }</h3> }
      { body }
    </div>
  );
};

export default Card;
export { Card };
