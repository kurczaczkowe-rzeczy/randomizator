import { Mapping, StringOrNumber } from './utilityTypes';

export interface IWeightAnswer {
  /** Identifier of whole answer. */
  answerID: StringOrNumber;
  /** Identifier of answer in specific field. */
  id: StringOrNumber;
  /** Value of weight associated with specific answer. */
  weight: number;
}

export interface IBaseAnswer extends IWeightAnswer {
  /** Actual given answer value. */
  value: string;
}

/** An object represents answer and associated property. */
export interface IAnswer extends IBaseAnswer {
  /** Field name associated with answer. */
  fieldName?: StringOrNumber;
  /** Identifier of form associated with answer. */
  formID: StringOrNumber;
  /** Number of milliseconds since the ECMAScript epoch. */
  timestamp: number;
}

export type WeightAnswers = IWeightAnswer[];
export type Answers = IAnswer[];
export type OrderedFirestoreAnswer = Required< IAnswer >;
export type OrderedFirestoreAnswers = OrderedFirestoreAnswer[];
export type FirestoreAnswer = Omit< Required< IAnswer >, 'id' >;
export type FirestoreAnswers = FirestoreAnswer[];

export type AnswerFields = Mapping< string >;
export type AnswersFields = AnswerFields[];
