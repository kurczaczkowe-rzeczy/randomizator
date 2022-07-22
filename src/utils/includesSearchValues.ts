import _includes from 'lodash/includes';
import _some from 'lodash/some';

/**
 * Check if some values of *searchValues* are include in *string*. If at least one value is included in *string*
 * function return *true* otherwise *false*.
 *
 * @param searchValues - collection of string values used to check if includes in *string*.
 * @param string - string against which *searchValues* will be checked.
 */
export const includesSearchValues = ( searchValues: string[], string: string ): boolean => _some( searchValues,
  ( value: string ) => _includes( string, value ));
