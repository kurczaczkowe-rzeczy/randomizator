import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';

const FormName = ({ content }) => ( // todo to refactor
  <Description label="Formularz" content={ content } />
);

FormName.propTypes = { content: PropTypes.node.isRequired };

export default FormName;
