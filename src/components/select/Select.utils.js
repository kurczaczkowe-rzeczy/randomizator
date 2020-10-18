import React from 'react';
import _map from 'lodash/map';

import MenuItem from '@material-ui/core/MenuItem';

const getValue = (
  options,
  value,
  defaultValue,
) => {
  if ( value === '' ) {
    if ( options ) {
      const find = options.find(( opt ) => opt.id === defaultValue );

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
    classes={{
      root: styles.menuItem,
      selected: styles.menuItemSelected,
    }}
    onClick={ () => onClick( option ) }
  >
    { option.name }
  </MenuItem>
));

const createID = ( label ) => label.toLowerCase().replaceAll( ' ', '-' );

export {
  createID,
  createOptions,
  getValue,
};
