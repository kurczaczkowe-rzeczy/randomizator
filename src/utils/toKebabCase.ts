import _kebabCase from 'lodash/kebabCase';

/** Method convert string to kebab case form for example: 'Hey what is going on' convert to 'hey-what-is-going-on'.
 * If passed value will not be a string methods simply return passed value. */
const toKebabCase = function <Value>( val: Value ): string | Value {
  return typeof val == 'string' ? _kebabCase( val ) : val;
};

export default toKebabCase;
