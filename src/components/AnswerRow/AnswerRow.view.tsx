import classNames from 'classnames';

import useAnswerController from 'hooks/useAnswerController';

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

  const { weight, edit } = useAnswerController( answerIndex );

  return (
    <div
      aria-rowindex={ answerIndex + 1 }
      className={ classNames(
        className,
        styles.row,
        { [ styles.deleted ]: !Number( weight ) && !edit },
      ) }
      style={ style }
      role="row"
    >
      { getCells( columns, answerIndex ) }
    </div>
  );
};

export default AnswerRow;
