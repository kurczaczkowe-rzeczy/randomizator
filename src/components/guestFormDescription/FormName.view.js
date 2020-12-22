import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';
import TextBox from 'components/textBox/TextBox.view';

const FormName = ({ content }) => (
  <Description
    label="Formularz" content={ (
      <TextBox>
        { content }
      </TextBox>
    ) }
  />
);

FormName.propTypes = { content: PropTypes.string.isRequired };

export default FormName;
