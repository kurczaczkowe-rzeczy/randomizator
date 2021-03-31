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
   * Link to current form
   */
  link: string;
  /**
   * Method for sing out users
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
