import _every from 'lodash/every';
import _isNil from 'lodash/isNil';

export type HasProperties = ( object: unknown, properties: string[]) => boolean;

/**
 * Method check if object has all properties from provided array.
 *
 * @param object - object against which method will check array of properties
 * @param properties - array of properties.
 */
export const hasProperties: HasProperties = ( object, properties ) =>
  typeof object == 'object'
  && !_isNil( object )
  && _every( properties, ( property ) => property in object || object.hasOwnProperty( property ));
