import React from 'react';
import PropTypes from 'prop-types';

import Select from 'components/select';

import classes from './formList.module.scss';

const FormList = ({
  label,
  onFormIdChange,
}) => (
  <div className={ classes.formDetails }>
    <Select
      label={ label }
      onFormIdChange={ onFormIdChange }
    />
  </div>
);

FormList.propTypes = {
  label: PropTypes.string.isRequired,
  onFormIdChange: PropTypes.func,
};

FormList.defaultProps = { onFormIdChange: () => {} };

export default FormList;

