import { SyntheticEvent } from 'react';

import { FormContainer } from 'components/form';
import { Mapping } from 'types';

export interface IGuest{
  /**
   * Name of form Creator
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
   * Methods takes user back to Creator page
   */
  onBackToCreator: () => void;
  /**
   * Method for send answers
   */
  onSubmit: FormContainer[ 'onSubmit' ];
}

export interface IAnswer {
  /** Holds field name of answer collection */
  fieldName: string;
  /** Specify actual value provides from user to field */
  value: string;
  /** The weight of answer. It will be use for increase, decrease or disable chance to draw value */
  weight: number;
}

export type Answers = IAnswer[];
export type CreateFieldsCollection = ( fields: Mapping< string > ) => Answers;
export type CheckValueIsValid = ( value: string ) => boolean;
