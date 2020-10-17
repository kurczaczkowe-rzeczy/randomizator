import React from 'react';
import PropTypes from 'prop-types';

import Select from 'components/select/Select.view';
import CopyLink from 'components/copyLink';
import classes from './formList.module.scss';

const FormList = ({
  content, userID, forms, onFormIdChange,
}) => (
  <div className={ classes.formDetails }>
    <Select
      label={ content }
      options={ forms }
      onFormIdChange={ onFormIdChange }
    />
    <CopyLink userID={ userID } />
  </div>
);

FormList.propTypes = {
  content: PropTypes.string.isRequired,
  forms: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  userID: PropTypes.string,
  onFormIdChange: PropTypes.func,
};

FormList.defaultProps = {
  userID: '',
  forms: [{ id: '', name: '' }],
  onFormIdChange: () => {},
};

export default FormList;

