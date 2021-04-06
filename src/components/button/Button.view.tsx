import { IButton } from 'components/button/Button.types';
import classes from 'components/button/button.module.scss';

/**
 * Clickable element that trigger some action
 */
export const Button = ({
  value,
  type = 'button',
  onClick,
}: IButton ): JSX.Element => (
  <button
    className={ classes.button }
    // eslint-disable-next-line react/button-has-type
    type={ type }
    onClick={ onClick }
  >
    { value }
  </button>
);

export default Button;
