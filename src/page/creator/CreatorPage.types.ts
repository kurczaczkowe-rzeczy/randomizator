import { IFileContainer } from 'components/FileContainer';
import { ISelect } from 'components/select/Select.types';

export interface IForm{
  /**
   * Identifier of specific form.
   */
  id: string;
  /**
   * Name of form.
   */
  name: string;
}

export interface IAnswers{
  [key: string]: string;
}

export interface IAnswersStore{
  [key: string]: string[];
}

export interface ICreator {
  /**
   * Number of form answers.
   */
  answersCounter: number;
  /**
   * Props passed to FileContainer component.
   */
  fileContainerProps: IFileContainer;
  /**
   * Link to specific form.
   */
  link: string;
  /**
   * Method download answers and converts it to csv file.
   */
  onDownloadAnswers: () => void;
  /**
   * Method draw answers.
   */
  onDrawClick: () => void;
  /**
   * Method change current displays form.
   */
  onFormIdChange?: ( formID: string ) => void;
  /**
   * Method move user to form page.
   */
  onGoToForm: () => void;
  /**
   * Method sign out users.
   */
  onLogout: () => void;
  /**
   * Props passed to select with forms.
   */
  selectFormsProps: ISelect;
}
