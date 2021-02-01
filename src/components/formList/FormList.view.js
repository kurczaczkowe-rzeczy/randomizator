import React from 'react';
import PropTypes from 'prop-types';

import Select from 'components/select';
// ToDo maybe this component is not necessary
const FormList = ({
  label,
  classes,
  onFormIdChange,
}) => (
  <div className={ classes }>
    <Select
      label={ label }
      onFormIdChange={ onFormIdChange }
    />
  </div>
);

FormList.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onFormIdChange: PropTypes.func,
};

FormList.defaultProps = {
  classes: undefined,
  onFormIdChange: () => {},
};

export default FormList;

