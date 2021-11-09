import classNames from 'classnames';

import { getCells } from './AnswerRow.utils';
import useStyles from './AnswerRow.styles';
import { IAnswerRow } from './AnswerRow.types';

/** Component display data in row based on columns. */
export const AnswerRow = ({
  className,
  answerIndex,
  style,
  columns,
}: IAnswerRow ): JSX.Element => {
  const styles = useStyles();

  return (
    <div
      aria-rowindex={ answerIndex + 1 }
      className={ classNames( className, styles.row ) }
      style={ style }
      role="row"
    >
      { getCells( columns, answerIndex ) }
    </div>
  );
};

export default AnswerRow;
