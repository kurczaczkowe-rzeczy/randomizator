import { SyntheticEvent } from 'react';

export interface IGuest{
  /**
   * Name of form creator
   */
  creatorName: string;
  /**
   * Name of form
   */
  formName: string;
  /**
   * Method for highlight form name
   */
  highlightFormName: ( event: SyntheticEvent ) => void;
  /**
   * Determinate if current user is logged in or not
   */
  isCreator?: boolean;
  /**
   * Show highlight form name
   */
  isHighlighted?: boolean;
  /**
   * Methods takes user back to creator page
   */
  onBackToCreator: () => void;
  /**
   * Method for send answers
   */
  onSubmit: ( nameMale: string, nameFemale: string ) => void;
}
