import useLocalize from 'hooks/useLocalize';

import classes from './answersCounter.module.scss';
import { IAnswersCounter } from './AnswersCounter.types';

/**
 * UI component displaying the number of answers
 */
export const AnswersCounter = ({ counter }: IAnswersCounter ): JSX.Element => {
  const localize = useLocalize();

  return (
    <h3 className={ classes.title }>
      { `${ localize( 'countAnswers' ) }: ` }
      <span>{counter}</span>
    </h3>
  );
};

export default AnswersCounter;
