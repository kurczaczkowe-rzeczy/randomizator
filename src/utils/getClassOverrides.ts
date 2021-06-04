import classNames from 'classnames';
import _filter from 'lodash/filter';
import _flatMap from 'lodash/flatMap';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';
import _isString from 'lodash/isString';
import _isUndefined from 'lodash/isUndefined';
import _map from 'lodash/map';
import _mapValues from 'lodash/mapValues';

import { ClassNameMap } from '@material-ui/styles/withStyles/withStyles';

import { StringOrUndefined, Mapping } from 'types';

type DynamicClass = Mapping<boolean>;
type ClassMapping = StringOrUndefined | DynamicClass;
type Classes = ClassMapping | ClassMapping[];

type ClassOverrides = <LocalClasses extends ClassNameMap>(
  classes: LocalClasses,
  mapping: Mapping<Classes>,
) => LocalClasses;

/**
 * Method get class names from *classes* map and based on input type return class name or array of class names.
 * @param classes - map of pairs classes and its overrides.
 */
const getClass = ( classes: Classes ): string | string[] => {
  if ( _isString( classes )) { return classes; }

  if ( _isArray( classes ) || _isUndefined( classes )) {
    return _flatMap<ClassMapping, string>( classes, ( className ) => getClass( className ));
  }

  if ( _isObject( classes )) {
    const mappedClasses = _map<DynamicClass, string>( classes, ( apply, className ) => apply ? className : '' );

    return _filter( mappedClasses, ( className ) => !!className );
  }

  throw TypeError( `Type ${ typeof classes } is not supported in this function!` );
};

/**
 * Method merge local css classes with override css classes includes in mapping param.
 * @param classes - map of jss classes and classes references.
 * @param mapping - map of pairs local styles and override styles.
 */
const getClassOverrides: ClassOverrides = ( classes, mapping ) => ({
  ...classes,
  ..._mapValues( mapping, ( value, key ) => classNames( classes[ key ], getClass( value ))),
});

export default getClassOverrides;
