import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  prepareID,
  createOptions,
  getValue,
} from './Select.utils';

import SelectUI from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyle from './Select.styles';

const Select = ({
  open,
  valueForm,
  defaultValue,
  label,
  options,
  onClose,
  onItemClick,
  onOpen,
}) => {
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
        value={ getValue(
          options,
          valueForm,
          defaultValue,
        ) }
        classes={ selectClasses }
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

Select.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  open: PropTypes.bool,
  options: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  valueForm: PropTypes.string,
  onClose: PropTypes.func,
  onItemClick: PropTypes.func,
  onOpen: PropTypes.func,
};

Select.defaultProps = {
  open: false,
  valueForm: '',
  defaultValue: '',
  label: '',
  options: [{ id: '', name: '' }],
  onClose: () => {},
  onItemClick: () => {},
  onOpen: () => {},
};

const mapStateToProps = ( state ) => ({
  defaultValue: state.form.docID,
  options: state.forms.forms,
});

export default connect( mapStateToProps )( Select );
