import { GenerateId } from 'jss';
import _toString from 'lodash/toString';
import _indexOf from 'lodash/indexOf';
import _get from 'lodash/get';

import { GenerateClassNameOptions } from '@material-ui/styles/createGenerateClassName/createGenerateClassName';

export type CreateGenerateClassName = () => GenerateId;

const pseudoClasses = [
  'checked',
  'disabled',
  'error',
  'focused',
  'focusVisible',
  'required',
  'expanded',
  'selected',
];

export const createGenerateClassName: CreateGenerateClassName = ( options?: GenerateClassNameOptions ) => {
  const disableGlobal = options?.disableGlobal ?? false;
  const seed = options?.seed ?? '';
  const seedPrefix = `${ seed }${ seed !== '' ? '-' : '' }`;

  let ruleCounter = 0;

  const getNextCounterId = (): string => _toString( ruleCounter++ );

  return ( rule, styleSheet ) => {
    const name = _get( styleSheet, 'options.name' );

    console.log( ' ->', { name, className: styleSheet?.options.classNamePrefix });

    if ( name && _indexOf( name, 'Mui' ) === 0 && !_get( styleSheet, 'options.link' ) && !disableGlobal ) {
      if ( _indexOf( pseudoClasses, rule.key ) !== -1 ) {
        return `Mui-${ rule.key }`;
      }

      const prefix = `${ seedPrefix }${ name }-${ rule.key }`;

      return `${ prefix }-${ getNextCounterId() }`;
    }

    if ( process.env.NODE_ENV === 'production' ) {
      return `${ seedPrefix }${ rule.key }-${ getNextCounterId() }`;
    }

    const suffix = `${ rule.key }-${ getNextCounterId() }`;

    if ( styleSheet?.options.classNamePrefix ) {
      return `${ seedPrefix }${ styleSheet.options.classNamePrefix }-${ suffix }`;
    }

    return `${ seedPrefix }${ suffix }`;
  };
};
