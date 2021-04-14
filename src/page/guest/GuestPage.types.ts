import { SyntheticEvent } from 'react';

export interface IGuest{
  /**
   * Name of form creator
   */
  creatorName: string;
  /**
   * Name of form
   */
  formName?: string;
  /**
   * Method for highlight form name
   */
  highlightFormName?: ( event: SyntheticEvent ) => void;
  /**
   * Show highlight form name
   */
  isHighlighted?: boolean;
  /**
   * Method for send answers
   */
  onSubmit?: ( nameMale: string, nameFemale: string ) => void;
}
