import SelectUI from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {
  prepareID,
  createOptions,
  getValue,
} from './Select.utils';
import useStyles from './Select.styles';
import { ISelect } from './Select.types';

/**
 * UI Components provides input with options list.
 */
export const Select = ({
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
  const styles = useStyles();
  const labelId = prepareID( label );

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
  } as const;

  return (
    <FormControl fullWidth>
      <InputLabel id={ labelId } classes={{ root: styles.label }}>
        {`${ label }:`}
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
        MenuProps={ menuProps }
        onClose={ onClose }
        onOpen={ onOpen }
        labelId={ labelId }
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
