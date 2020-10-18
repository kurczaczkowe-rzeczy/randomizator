import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectView from './Select.view';

const Select = ({
  defaultValue,
  label,
  onFormIdChange,
}) => {
  const [ open, setOpen ] = useState( false );

  const onOpen = () => setOpen( true );
  const onClose = () => setOpen( false );
  const [ valueForm, setValueForm ] = useState( '' );

  const onMenuItemClick = ( option ) => {
    setValueForm( option.name );
    onFormIdChange( option.id );
  };

  return (
    <SelectView
      open={ open }
      valueForm={ valueForm }
      defaultValue={ defaultValue }
      label={ label }
      onClose={ onClose }
      onItemClick={ onMenuItemClick }
      onOpen={ onOpen }
    />
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  onFormIdChange: PropTypes.func,
};

Select.defaultProps = {
  defaultValue: '',
  label: '',
  onFormIdChange: () => {},
};

const mapStateToProps = ( state ) => ({ defaultValue: state.form.docID });

export default connect( mapStateToProps )( Select );
