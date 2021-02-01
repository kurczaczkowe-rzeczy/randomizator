import React from 'react';
import _map from 'lodash/map';
import _find from 'lodash/find';
import _toLower from 'lodash/toLower';
import _replace from 'lodash/replace';

import MenuItem from '@material-ui/core/MenuItem';

const getValue = (
  options,
  value,
  defaultValue,
) => {
  // ToDo refactor this
  if ( value === '' ) {
    if ( options ) {
      const find = _find( options, ( opt ) => opt.id === defaultValue );

      return find ? find.name : '';
    }
  }

  return value;
};

const createOptions = (
  options,
  styles,
  onClick,
) => _map( options, ( option ) => (
  <MenuItem
    key={ option.id }
    value={ option.name }
    classes={{ root: styles.menuItem }}
    onClick={ () => onClick( option ) }
  >
    { option.name }
  </MenuItem>
));
// ToDo change name
const prepareID = ( label ) => _toLower( _replace(
  label, /\s/g, '-',
));

export {
  prepareID,
  createOptions,
  getValue,
};
