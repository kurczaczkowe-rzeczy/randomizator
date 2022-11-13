import { readString } from 'react-papaparse';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _reduce from 'lodash/reduce';
import _includes from 'lodash/includes';
import _forEach from 'lodash/forEach';
import _groupBy from 'lodash/groupBy';
import _some from 'lodash/some';
import _uniq from 'lodash/uniq';
import _indexOf from 'lodash/indexOf';
import _find from 'lodash/find';

import { AnswerFields, AnswersFields, Fields } from 'types';

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

export interface IParsedAnswerFile {
  answers: string[][];
  fileName?: string;
  shouldDisplayError: boolean;
}

export const parseAnswerFile = ( text: string, fields: Fields, fileName: string ): IParsedAnswerFile => {
  const [ fieldNames, ...answers ] = readString( text ).data as string[][];

  const uniqFields = _includes( fieldNames, 'answerID' )
    ? _uniq( _map( answers, _indexOf( fieldNames, 'fieldName' )))
    : _filter( fieldNames, ( field ) => field !== 'emptyColumn' );

  return {
    answers,
    shouldDisplayError: _some( uniqFields, ( field ) => !_find( fields, ({ name }) => field === name )),
    fileName,
  };
};
