import { IFileContainer } from 'components/FileContainer';
import { ISelect } from 'components/Select';
import { AnswerFields } from 'page/Guest';

export interface IForm {
  /** Identifier of specific form. */
  id: string;
  /** Name of form. */
  name: string;
}

export interface IAnswer {
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
  /** Link to form for guest users. */
  link: string;
  /** Method download answers and converts it to csv file. */
  onDownloadAnswers: () => void;
  /** Method draw answers. */
  onDrawClick: () => void;
  /** Method change current displays form. */
  onFormIdChange?: ( formID: string ) => void;
  /** Method sign out users. */
  onLogout: () => void;
  /** Props passed to select with forms. */
  selectFormsProps: ISelect;
}

export type Answers = IAnswer[];
