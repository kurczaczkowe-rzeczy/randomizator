import classes from './answersCounter.module.scss';

// ToDo move hardcoded strings to messages
export interface IAnswersCounter{
  /**
   * Number of form answers
   */
  counter: number;
}

/**
 * UI component displaying the number of answers
 */
export const AnswersCounter = ({ counter }: IAnswersCounter ): JSX.Element => (
  <h3 className={ classes.title }>
    Ilość odpowiedzi:
    {' '}
    <span>{ counter }</span>
  </h3>
);

export default AnswersCounter;
