import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';
import Select from 'components/select/Select.view';
import CopyLink from 'components/copyLink';

const FormList = ({
  content, userID, forms, onFormIdChange,
}) => (
  <>
    <Description label="Formularz" content={ content } />
    <Select
      options={ forms }
      onFormIdChange={ onFormIdChange }
    />
    <CopyLink userID={ userID } />
  </>
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

