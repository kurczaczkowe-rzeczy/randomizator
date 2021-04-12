export interface IForm{
  id: string;
  name: string;
}

export interface IAnswers{
  [key: string]: string;
}

export interface IAnswersStore{
  [key: string]: string[];
}

export interface ICreator{
  /**
   * Number of form answers
   */
  answersCounter: number;
  /**
   * Method for convert answers to csv file
   */
  getAnswersToFile: () => void;
  /**
   * Link to specific form
   */
  link: string;
  /**
   * Method for sign out users
   */
  logout: () => void;
  /**
   * Method for change current displays form
   */
  onFormIdChange?: ( formID: string ) => void;
  /**
   * Method for draw answers
   */
  onRandomClick: () => void;
}
