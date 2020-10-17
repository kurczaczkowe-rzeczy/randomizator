import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import _map from 'lodash/map';

import useStyle from 'components/select/Select.styles';

const Select = ({
  options, onFormIdChange, defaultValue, label,
}) => {
  const styles = useStyle();
  const [ valueForm, setValueForm ] = useState( '' );

  const opt = _map( options, ( option ) => (
    <MenuItem
      key={ option.id }
      value={ option.name }
      classes={{
        root: styles.menuItem,
        selected: styles.menuItemSelected,
      }}
      onClick={ () => {
        setValueForm( option.name );
        onFormIdChange( option.id );
      } }
    >
      { option.name }
    </MenuItem>
  ));

  const getValue = ( value ) => {
    if ( value === '' ) {
      if ( options ) {
        const find = options.find(( opt ) => opt.id === defaultValue );

        return find ? find.name : '';
      }
    }

    return value;
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id="form-name"
        classes={{ root: styles.label }}
      >
        {label}
        :
      </InputLabel>
      <SelectUI
        value={ getValue( valueForm ) }
        classes={{
          select: styles.labelFocus, icon: styles.icon, root: styles.selected,
        }}
        MenuProps={{ classes: { paper: styles.paper }}}
        labelId="form-name"
      >
        { opt }
      </SelectUI>
    </FormControl>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  onFormIdChange: PropTypes.func,
};

Select.defaultProps = {
  defaultValue: '',
  label: '',
  options: [{ id: '', name: '' }],
  onFormIdChange: () => {},
};

const mapStateToProps = ( state ) => ({ defaultValue: state.form.docID });

export default connect( mapStateToProps )( Select );
