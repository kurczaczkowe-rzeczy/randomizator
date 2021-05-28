import { KeyboardEvent } from 'react';
import classNames from 'classnames';

import useStyle from './MenuItem.styles';
import { IInteractiveMenuItem } from './MenuItem.types';

/**
 * Component represents element from menu.
 */
const MenuItem = ({
  active,
  children,
  onClick,
}: IInteractiveMenuItem ): JSX.Element => {
  const styles = useStyle();

  const handleOnKeyUp = ( event: KeyboardEvent<HTMLDivElement> ): void => {
    if ( event.key === 'Enter' ) {
      onClick();
    }
  };

  const rootClasses = classNames( styles.root, { [ styles.active ]: active });

  return (
    <div
      tabIndex={ 0 }
      role="menuitem"
      className={ rootClasses }
      onClick={ onClick }
      onKeyUp={ handleOnKeyUp }
    >
      { children }
    </div>
  );
};

export default MenuItem;
export { MenuItem };
