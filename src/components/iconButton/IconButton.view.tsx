import { cloneElement, ReactElement } from 'react';
import classNames from 'classnames';

import classes from './iconButton.module.scss';

interface IIconButton {
  icon: ReactElement;
  onClick: () => void;
  value: string;
}
// ToDo: to refactor
const IconButton = ({
  value,
  icon,
  onClick = (): void => {},
}: IIconButton ): JSX.Element => {
  const preparedIcon = cloneElement( icon, { className: classNames( classes.icon, classes.moreSpace ) });

  return (
    <button
      type="button"
      className={ classes.button }
      onClick={ onClick }
    >
      { preparedIcon }
      <span>{ value }</span>
    </button>
  );
};

export default IconButton;
