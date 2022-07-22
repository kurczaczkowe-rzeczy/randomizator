import { SyntheticEvent } from 'react';

import { FormContainer } from 'components/form';
import { IForm } from 'types';

export interface IGuest {
  /** Name of form Creator. */
  creatorName: string;
  /** Name of form. */
  form: IForm;
  /** Method for highlight form name. */
  highlightFormName: ( event: SyntheticEvent ) => void;
  /** Determinate if current user is logged in or not. */
  isCreator?: boolean;
  /** Show highlight form name. */
  isHighlighted?: boolean;
  /** Methods takes user back to Creator page. */
  onBackToCreator: () => void;
  /** Method for send answers. */
  onSubmit: FormContainer[ 'onSubmit' ];
}

export interface IAnswerField {
  /** Holds field name of answer collection. */
  fieldName: string;
  /** Specify actual value provides from user to field. */
  value: string;
  /** The weight of answer. It will be used for increase, decrease or disable chance to draw value. */
  weight: number;
}

export type AnswerFields = IAnswerField[];
