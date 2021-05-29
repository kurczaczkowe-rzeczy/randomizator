import { cloneElement } from 'react';
import classNames from 'classnames';

import { IButton } from './Button.types';
import useStyles from './Button.styles';

/**
 * Clickable element that trigger some action
 */
export const ButtonView = ({
  icon,
  value,
  onClick,
  type = 'button',
  variant = 'button',
}: IButton ): JSX.Element => {
  const isIconButton = variant === 'iconButton';
  const styles = useStyles();
  const preparedIcon = isIconButton && icon
    ? cloneElement( icon, { className: classNames( styles.icon, styles.moreSpace ) })
    : null;
  const buttonClasses = classNames( styles.root, { [ styles.iconButton ]: isIconButton });

  return (
    <button
      className={ buttonClasses }
      // eslint-disable-next-line react/button-has-type
      type={ type }
      onClick={ onClick }
    >
      { isIconButton
        ? (
          <>
            { preparedIcon }
            <span>{ value }</span>
          </>
        )
        : value}
    </button>
  );
};

export default ButtonView;
