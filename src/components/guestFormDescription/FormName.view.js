import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';

const FormName = ({ content }) => (
  <Description label="Formularz" content={ content } />
);

FormName.propTypes = { content: PropTypes.string.isRequired };

export default FormName;