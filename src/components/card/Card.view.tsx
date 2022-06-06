import classNames from 'classnames';
import _isEmpty from 'lodash/isEmpty';

import Loading from 'components/loading';

import { ICard } from './Card.types';
import useStyles from './Card.styles';
import { getTitleContent } from './Card.utils';

/** Box that warps other components. */
export const Card = ({
  body,
  cardClass = '',
  centerBody = true,
  id,
  isLoading = false,
  title = null,
  fullWidthBody = false,
  transparent = false,
}: ICard ): JSX.Element => {
  const styles = useStyles();

  return (
    <div
      className={ classNames( styles.root,
        {
          [ styles.card ]: !transparent,
          [ cardClass ]: !_isEmpty( cardClass ),
          [ styles.center ]: centerBody,
        }) }
      id={ id }
    >
      {isLoading && (
        <div className={ styles.loaderWrapper }>
          <Loading classes={{ root: styles.loadingRoot }} />
        </div>
      )}
      {getTitleContent( title )}
      <div className={ classNames({ [ styles.fullWidth ]: !centerBody || fullWidthBody }) || undefined }>
        {body}
      </div>
    </div>
  );
};

export default Card;
