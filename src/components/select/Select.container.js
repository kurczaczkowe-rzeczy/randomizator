import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectView from './Select.view';

const Select = ({
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
      label={ label }
      onClose={ onClose }
      onItemClick={ onMenuItemClick }
      onOpen={ onOpen }
    />
  );
};

Select.propTypes = {
  label: PropTypes.string,
  onFormIdChange: PropTypes.func,
};

Select.defaultProps = {
  label: '',
  onFormIdChange: () => {},
};

export default Select;
