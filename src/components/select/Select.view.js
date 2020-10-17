import React from 'react';
import PropTypes from 'prop-types';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyle from './select.styles';
import Input from 'components/select/components/Input/Input.view';

const Select = () => {
  const styles = useStyle();

  return (
    <FormControl fullWidth>
      <InputLabel
        focused
        id="form-name"
        classes={{
          root: styles.label,
          focused: styles.labelFocus,
        }}
      >
        Formularz:
      </InputLabel>
      <SelectUI
        classes={{ select: styles.select }}
        MenuProps={{ classes: { paper: styles.paper }}}
        labelId="form-name"
      >
        <MenuItem>opcja 1</MenuItem>
        <MenuItem>opcja 2</MenuItem>
        <MenuItem>opcja 3</MenuItem>
        <MenuItem>opcja 4</MenuItem>
      </SelectUI>
    </FormControl>
  );
};

Select.propTypes = {};

Select.defaultProps = {};

export default Select;
