import { UseFormRegister } from 'react-hook-form';

import { LocaleResourcesIDs } from 'assets/locale/types';
import { StringOrNumber } from 'types';

export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

export type GetString = ( resourceId: LocaleResourcesIDs ) => string;

export interface IAnswerValues {
  /** This value specify identifier of answer */
  answerID: StringOrNumber;
  /** This value specify current value of weight associated with specific answer. */
  weight: number;
}
export interface IAnswersValues {
  /** This value specify collection of {@link IAnswerValues} */
  answers: IAnswerValues[];
}

export interface IAnswer {
  /** Answer index in field array. */
  answerIndex: number;
}

export interface IAnswerController extends IAnswerValues {
  /** This value specify if associated answer is edited or not. */
  edit: boolean;
  /** This method is used when you want to register field to form. */
  register: UseFormRegister< IAnswersValues >;
}
