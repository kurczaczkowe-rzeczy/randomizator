import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import { ICard } from './Card.types';
import useStyles from './Card.styles';
import { getTitleContent } from './Cars.utils';

/** Box that warps other components. */
const Card = ({
  title,
  cardClass = '',
  centerBody = true,
  body,
  id,
}: ICard ): JSX.Element => {
  const styles = useStyles();

  return (
    <div
      className={ classNames(
        styles.card,
        { [ cardClass ]: !_isEmpty( cardClass ) },
        { [ styles.center ]: centerBody },
      ) }
      id={ id }
    >
      {getTitleContent( title )}
      <div className={ classNames( !centerBody && styles.bodyWrapper ) }>
        {body}
      </div>
    </div>
  );
};

export default Card;
export { Card };
