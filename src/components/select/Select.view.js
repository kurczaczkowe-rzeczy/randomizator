import React from 'react';
import PropTypes from 'prop-types';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import _map from 'lodash/map';

import useStyle from 'components/select/Select.styles';

const Select = ({ options }) => {
  const styles = useStyle();

  const opt = _map( options, ( option ) => (
    <MenuItem
      key={ option.id }
      value={ option.name }
      classes={{
        root: styles.menuItem,
        selected: styles.menuItemSelected,
      }}
    >
      { option.name }
    </MenuItem>
  ));

  return (
    <FormControl fullWidth>
      <InputLabel
        id="form-name"
        classes={{ root: styles.label }}
      >
        Formularz:
      </InputLabel>
      <SelectUI
        classes={{ select: styles.labelFocus }}
        MenuProps={{ classes: { paper: styles.paper }}}
        labelId="form-name"
      >
        { opt }
      </SelectUI>
    </FormControl>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};

Select.defaultProps = { options: [{ id: '', name: '' }]};

export default Select;
