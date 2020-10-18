import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectUI from '@material-ui/core/Select';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyle from './Select.styles';
import {
  createID,
  createOptions,
  getValue,
} from './Select.utils';

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

  return (
    <FormControl fullWidth>
      <InputLabel
        id={ createID( label ) }
        classes={{ root: styles.label }}
      >
        {label}
        :
      </InputLabel>
      <SelectUI
        disableUnderline
        open={ open }
        value={ getValue(
          options, valueForm, defaultValue,
        ) }
        classes={{
          select: styles.select, icon: styles.icon, root: styles.selected,
        }}
        MenuProps={{
          classes: {
            paper: styles.paper,
            list: styles.list,
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        onClose={ onClose }
        onOpen={ onOpen }
        labelId={ createID( label ) }
      >
        { createOptions(
          options, styles, onItemClick,
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

const mapStateToProps = ( state ) => ({ defaultValue: state.form.docID });

export default connect( mapStateToProps )( Select );
