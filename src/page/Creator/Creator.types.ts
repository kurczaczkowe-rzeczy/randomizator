import { IFileContainer } from 'components/FileContainer';
import { AnswerFields } from 'page/Guest';
import { IForm } from 'types';

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
  /** Props passed to FileContainer component. */
  fileContainerProps: IFileContainer;
  /** Method change current displays form. */
  onFormIdChange?: ( formID: string ) => void;
  /** Method signs out users. */
  onLogout: () => void;
  /** Data from selected form. */
  selectedForm: IForm;
}

export type Answers = IAnswerWithId[];
