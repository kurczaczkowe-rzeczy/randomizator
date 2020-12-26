import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';
import TextBox from 'components/textBox/TextBox.view';

const CreatorDescription = ({ content }) => ( // todo to refactor
  <Description
    label="Twórca"
    content={ (
      <TextBox>
        { content }
      </TextBox>
    ) }
  />
);

CreatorDescription.propTypes = { content: PropTypes.string.isRequired };

export default CreatorDescription;
