import classes from './answersCounter.module.scss';

// ToDo move hardcoded strings to messages
export interface IAnswersCounter{
  counter: number;
}

const AnswersCounter = ({ counter }: IAnswersCounter ): JSX.Element => (
  <h3 className={ classes.title }>
    Ilość odpowiedzi:
    {' '}
    <span>{ counter }</span>
  </h3>
);

export default  AnswersCounter;
