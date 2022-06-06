import _isEmpty from 'lodash/isEmpty';

export const checkValueIsValid = ( value: string ): boolean => !_isEmpty( value );
