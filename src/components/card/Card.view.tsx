import classNames from 'classnames';
import _isEmpty from 'lodash/isEmpty';

import Loading from 'components/loading';

import { ICard } from './Card.types';
import useStyles from './Card.styles';
import { getTitleContent } from './Cars.utils';

/** Box that warps other components. */
const Card = ({
  body,
  cardClass = '',
  centerBody = true,
  id,
  isLoading = false,
  title,
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
      {isLoading && (
        <div className={ styles.loaderWrapper }>
          <Loading classes={{ root: styles.loadingRoot }} />
        </div>
      )}
      {getTitleContent( title )}
      <div className={ classNames( !centerBody && styles.bodyWrapper ) }>
        {body}
      </div>
    </div>
  );
};

export default Card;
export { Card };
