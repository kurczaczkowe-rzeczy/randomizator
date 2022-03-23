import { UseFormRegister } from 'react-hook-form';
import firebase from 'firebase';
import { WhereFilterOp } from '@firebase/firestore-types';

import { LocaleResourcesIDs } from 'assets/locale/types';
import { IAnswersManagerDirtyAnswerPayload } from 'store/types';
import {
  Answers, IAnswer,
  IWeightAnswer,
  WeightAnswers,
} from 'types';

export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

export type GetString = ( resourceId: LocaleResourcesIDs ) => string;

/** An object represents shape of form values. */
export interface IAnswersValues {
  /** This value specify collection of {@link WeightAnswers} */
  answers: WeightAnswers;
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
export interface IAnswerController extends IWeightAnswer {
  /** This value specify if associated answer is edited or not. */
  edit: boolean;
  /** This method is used when you want to register field to form. */
  register: UseFormRegister< IAnswersValues >;
}

/** An object represent document or query snapshot provided from firestore. */
export type DocumentOrQuerySnapshot = firebase.firestore.DocumentSnapshot | firebase.firestore.QuerySnapshot | null;

/** Array of filter tuples allows adding condition to firestore query. */
export type Filters = [ string, WhereFilterOp, string ][];

/** An object collect information about state of fetching answers. */
export interface IUseAnswersConnectReturn {
  /** Array of answer fetched from form stored in firestore. */
  answers: Answers;
  /** Identifier of form associated with answer. */
  formID: IAnswer[ 'formID' ];
  /** State of loading answers. */
  isLoading: boolean;
  /** Methods allows keep tracking last fetched answer. */
  updateStartAfter: () => void;
}

/** An object represents parameters that could be used in useAnswerConnect hook. */
export interface IUseAnswersConnectParams {
  /** Array of filter tuples allows adding condition to firestore query. */
  filters?: Filters;
  /** Number of maximum fetched answers at once. */
  limit?: number;
}
