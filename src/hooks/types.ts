import { UseFormRegister } from 'react-hook-form';

import { LocaleResourcesIDs } from 'assets/locale/types';
import { IAnswersManagerDirtyAnswerPayload } from 'store/types';
import { Answers, IAnswer } from 'types';

export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

export type GetString = ( resourceId: LocaleResourcesIDs ) => string;

/** An object represents shape of from values. */
export interface IAnswersValues {
  /** This value specify collection of {@link Answers} */
  answers: Answers;
}

/** An object represents information about answer. */
export interface IAnswerRowController {
  /** This value specify answer index in field array. */
  answerIndex: IAnswersManagerDirtyAnswerPayload[ 'answerIndex' ];
}

/**
 * An object represents information about answer controller such as edit state, form register method, answer identifier
 * and weight associated with answer. It extends **IAnswer** to provide answer form values such as weight and
 * answer identifier.
 */
export interface IAnswerController extends IAnswer {
  /** This value specify if associated answer is edited or not. */
  edit: boolean;
  /** This method is used when you want to register field to form. */
  register: UseFormRegister< IAnswersValues >;
}
