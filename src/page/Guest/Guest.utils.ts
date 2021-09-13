import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';

import { CheckValueIsValid, CreateFieldsCollection } from './Guest.types';

export const checkValueIsValid: CheckValueIsValid = ( value ) => !_isEmpty( value );

export const createFieldsCollection: CreateFieldsCollection = ( fields ) => _map( fields,
  ( value, key ) => {
    const isValid = checkValueIsValid( value );

    return {
      fieldName: key,
      value: isValid ? value : '',
      weight: isValid ? 1 : 0,
    };
  });
