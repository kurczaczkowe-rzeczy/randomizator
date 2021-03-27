/* eslint-disable @typescript-eslint/ban-ts-comment */
import SelectUI from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {
  prepareID,
  createOptions,
  getValue,
} from './Select.utils';
import useStyle from './Select.styles';
import { ISelect } from './Select.types';

/**
 * UI Components provides input with options list.
 */
const Select = ({
  defaultValue,
  label,
  name,
  open = undefined,
  options = [],
  value = '',
  onClose = undefined,
  onItemClick,
  onOpen = undefined,
}: ISelect ): JSX.Element => {
  const styles = useStyle();

  const selectClasses = {
    root: styles.selected,
    icon: styles.icon,
    select: styles.select,
  };
  const menuProps = {
    classes: {
      paper: styles.paper,
      list: styles.list,
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id={ prepareID( label ) }
        classes={{ root: styles.label }}
      >
        {/* ToDo refactor this */}
        {label}
        :
      </InputLabel>
      <SelectUI
        disableUnderline
        open={ open }
        name={ name }
        value={ getValue(
          options,
          value,
          defaultValue,
        ) }
        classes={ selectClasses }
        // @ts-ignore
        MenuProps={ menuProps }
        onClose={ onClose }
        onOpen={ onOpen }
        labelId={ prepareID( label ) }
      >
        { createOptions(
          options,
          styles,
          onItemClick,
        ) }
      </SelectUI>
    </FormControl>
  );
};

export default Select;
export { Select };
