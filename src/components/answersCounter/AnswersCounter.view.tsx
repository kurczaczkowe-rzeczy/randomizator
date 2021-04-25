import useLocaleString from 'hooks/useLocaleString';

import classes from './answersCounter.module.scss';
import { IAnswersCounter } from './AnswersCounter.types';

/**
 * UI component displaying the number of answers
 */
export const AnswersCounter = ({ counter }: IAnswersCounter ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <h3 className={ classes.title }>
      { `${ getString( 'countAnswers' ) }: ` }
      <span>{counter}</span>
    </h3>
  );
};

export default AnswersCounter;
