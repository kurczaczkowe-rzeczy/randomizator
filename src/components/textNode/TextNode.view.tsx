import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import { ITextNode } from './TextNode.types';
import useStyles from './TextNode.styles';

/**
 * This component is used for preview UI elements like label or inputs.
 */
export const TextNode = ({
  required = false,
  type = 'label',
  value,
  classes,
}: ITextNode ): JSX.Element => {
  const styles = useStyles();

  return (
    <p className={ classNames( styles.holdHeight,
      { [ classes ]: !_isEmpty( classes ) }) }
    >
      {value || ' '}
      {( required && type === 'label' ) && <span>* </span>}
      {type === 'label' && ':'}
    </p>
  );
};

export default TextNode;
