import { UseFormRegister } from 'react-hook-form';

import { LocaleResourcesIDs } from 'assets/locale/types';
import { StringOrNumber } from 'types';

export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

export type GetString = ( resourceId: LocaleResourcesIDs ) => string;

/** An object represents values shape associated with answer. */
export interface IAnswerValues {
  /** This value specify identifier of answer */
  answerID: StringOrNumber;
  /** This value specify current value of weight associated with specific answer. */
  weight: number;
}

/** An object represents shape of from values. */
export interface IAnswersValues {
  /** This value specify collection of {@link IAnswerValues} */
  answers: IAnswerValues[];
}

/** An object represents information about answer. */
export interface IAnswer {
  /** This value specify answer index in field array. */
  answerIndex: number;
}

/**
 * An object represents information about answer controller such as edit state, form register method, answer identifier
 * and weight associated with answer. It extends **IAnswerValues** to provide answer form values such as weight and
 * answer identifier.
 */
export interface IAnswerController extends IAnswerValues {
  /** This value specify if associated answer is edited or not. */
  edit: boolean;
  /** This method is used when you want to register field to form. */
  register: UseFormRegister< IAnswersValues >;
}
