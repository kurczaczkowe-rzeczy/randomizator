import _map from 'lodash/map';
import _find from 'lodash/find';
import _toLower from 'lodash/toLower';
import _replace from 'lodash/replace';

import MenuItem from '@material-ui/core/MenuItem';

import { IClasses, IOption } from './Select.types';

/** Method search string that will be display in select component.
 *
 * @param options - {@link IOption}.
 * @param value - The string chosen from options.
 * @param defaultValue - The string that will be display if the value is empty.
 * @return string that will be provide to select component.
 */
const getValue = (
  options: IOption[],
  value: string,
  defaultValue: string,
): string => {
  // ToDo refactor this
  if ( value === '' ) {
    if ( options ) {
      const find = _find( options, ( opt ) => opt.id === defaultValue );

      return find ? find.name : '';
    }
  }

  return value;
};
// ToDo move to separate component
const createOptions = (
  options: IOption[],
  styles: IClasses,
  onClick: ( option: IOption ) => void,
): JSX.Element[] => _map( options, ( option ) => (
  <MenuItem
    key={ option.id }
    value={ option.name }
    classes={{ root: styles.menuItem }}
    onClick={ (): void => onClick( option ) }
  >
    { option.name }
  </MenuItem>
));
// ToDo change name
/** Function change all spaces in string to "-" and convert him to lower case.
 *
 * @param label - The string on which the operation will be performed.
 * @return id of an element that acts as an additional labe
 */
const prepareID = ( label: string ): string => _toLower( _replace(
  label, /\s/g, '-',
));

export {
  prepareID,
  createOptions,
  getValue,
};
