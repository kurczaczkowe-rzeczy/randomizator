import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _some from 'lodash/some';
import _values from 'lodash/values';

import { Mapping } from 'types';
import { LocaleResourcesIDs } from 'assets/locale/types';

const someFieldFill = ( ...fields: string[]): boolean => _some( fields, ( field ) => !_isEmpty( field ));

export const getErrorMessage = (
  checkIsNotRobot: string,
  nameOfForm: string,
  fields: Mapping< string >,
): LocaleResourcesIDs | null => {
  if ( _isEmpty( checkIsNotRobot )) { return 'formErrorEmptyFormName'; }
  if ( !_isEqual( checkIsNotRobot, nameOfForm )) { return 'formErrorWrongFormName'; }
  if ( !someFieldFill( ..._values( fields ))) { return 'formErrorEmptyFormFields'; }

  return null;
};
