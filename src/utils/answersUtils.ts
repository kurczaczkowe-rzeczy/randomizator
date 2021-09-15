import uuid from 'react-uuid';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _isArray from 'lodash/isArray';

import { IAnswer } from 'page/Creator';
import { AnswerFields, IAnswerField } from 'page/Guest';
import { Mapping } from 'types';

export const checkValueIsValid = ( value: string ): boolean => !_isEmpty( value );

export const createAnswerField = ( value: string, fieldName: string ): IAnswerField => {
  const isValid = checkValueIsValid( value );

  return {
    fieldName,
    value: isValid ? value : '',
    weight: isValid ? 1 : 0,
  };
};

export const createFieldsCollection = ( fields: Mapping< string > ): AnswerFields => _map( fields, createAnswerField );

export const createAnswer = ( fields: Mapping< string > | AnswerFields ): IAnswer => ({
  fields: _isArray( fields ) ? fields : createFieldsCollection( fields ),
  id: uuid(),
});
