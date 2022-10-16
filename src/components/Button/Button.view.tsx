import { cloneElement } from 'react';
import classNames from 'classnames';
import _includes from 'lodash/includes';
import _toLower from 'lodash/toLower';

import { IButton } from './Button.types';
import useStyles from './Button.styles';

/**
 * Clickable element that trigger some action
 */
export const Button = ({
  icon,
  label,
  onClick,
  type = 'button',
  variant = 'button',
  className,
}: IButton ): JSX.Element => {
  const isIconButton = _includes( _toLower( variant ), _toLower( 'iconButton' ));
  const isTextButton = _includes( _toLower( variant ), _toLower( 'text' ));
  const isContainedButton = !isTextButton;

  const styles = useStyles();
  const preparedIcon = isIconButton && icon
    ? cloneElement( icon, { className: styles.moreSpace })
    : null;
  const buttonClasses = classNames(
    styles.root,
    className,
    {
      [ styles.iconButton ]: isIconButton,
      [ styles.containedButton ]: isContainedButton,
      [ styles.textButton ]: isTextButton,
    },
  );

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
            <span>{ label }</span>
          </>
        )
        : label}
    </button>
  );
};

export default Button;
