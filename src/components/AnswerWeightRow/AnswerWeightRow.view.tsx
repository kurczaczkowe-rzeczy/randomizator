import classNames from 'classnames';

import { getCells } from './AnswerWeightRow.utils';
import useStyles from './AnswerWeightRow.styles';
import { IAnswersWeightRow } from './AnswerWeightRow.types';

/** Component display data in row based on columns. */
export const AnswersWeightRow = ({
  className,
  answerIndex,
  style,
  columns,
}: IAnswersWeightRow ): JSX.Element => {
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

export default AnswersWeightRow;
