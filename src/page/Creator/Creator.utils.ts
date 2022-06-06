import { readString } from 'react-papaparse';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _reduce from 'lodash/reduce';

import { AnswerFields, AnswersFields } from 'types';

type CreateParsedAnswer = ( fieldNames: string[]) => ( answer: string[]) => AnswerFields;

const createParsedAnswer: CreateParsedAnswer = ( fieldNames ) => ( answer ) => _reduce< string, AnswerFields >(
  answer,
  (
    result,
    fieldValue,
    index,
  ) => index === 0
    ? result
    : (
      { ...result, [ fieldNames[ index ] ]: fieldValue }
    ),
  {},
);

export const parseText = ( text: string ): AnswersFields => {
  const [ fieldNames, ...answers ] = readString( text ).data as string[][];

  return _filter( _map( answers, createParsedAnswer( fieldNames )), ( answer ) => !_isEmpty( answer ));
};
