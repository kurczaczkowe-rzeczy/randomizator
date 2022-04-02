import { IFileContainer } from 'components/FileContainer';
import { AnswerFields } from 'page/Guest';

export interface IAnswerWithId {
  /** Array of fields created base on provided users answers. */
  fields: AnswerFields;
  /** Unique identifier of answer. */
  id: string;
}

export interface IFormDoc {
  /** Users answers. */
  answers: Answers;
  /** Form name. */
  name: string;
}

export interface ICreator {
  /** Number of form answers. */
  answersCounter: number;
  /** Props passed to FileContainer component. */
  fileContainerProps: IFileContainer;
  /** Method download answers and converts it to csv file. */
  onDownloadAnswers: () => void;
  /** Method draw answers. */
  onDrawClick: () => void;
  /** Method change current displays form. */
  onFormIdChange?: ( formID: string ) => void;
  /** Method signs out users. */
  onLogout: () => void;
}

export type Answers = IAnswerWithId[];
