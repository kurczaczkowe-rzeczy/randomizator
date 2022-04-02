import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _isArray from 'lodash/isArray';

import {
  Mapping,
  IAnswer,
  Answers,
} from 'types';

export const checkValueIsValid = ( value: string ): boolean => !_isEmpty( value );

type FirestoreAnswer = Omit< IAnswer, 'id' >;
type FirestoreAnswers = FirestoreAnswer[];

type CreateAnswerField = ( formID: IAnswer[ 'formID' ], answerID: IAnswer[ 'answerID' ])
  => ( value: string, fieldName: string ) => FirestoreAnswer;

export const createAnswerField: CreateAnswerField = ( formID, answerID ) => ( value, fieldName ) => {
  const isValid = checkValueIsValid( value );

  return {
    answerID,
    formID,
    fieldName,
    value: isValid ? value : '',
    timestamp: Date.now(),
    weight: isValid ? 1 : 0,
  };
};

type CreateFieldsCollection = (
  fields: Mapping< string >,
  formID: IAnswer[ 'formID' ],
  answerID: IAnswer[ 'answerID' ],
) => FirestoreAnswers;

export const createFieldsCollection: CreateFieldsCollection = (
  fields,
  formID,
  answerID,
) => _map( fields, createAnswerField( formID, answerID ));

type CreateAnswer = (
  fields: Mapping< string > | Answers,
  formID: IAnswer[ 'formID' ],
  answerID: IAnswer[ 'answerID' ],
) => FirestoreAnswers;

export const createAnswer: CreateAnswer = (
  fields,
  formID,
  answerID,
) => _isArray( fields )
  ? fields
  : createFieldsCollection(
    fields,
    formID,
    answerID,
  );
