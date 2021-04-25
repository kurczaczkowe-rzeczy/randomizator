import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';
import TextBox from 'components/textBox/TextBox.view';
import useLocaleString from '../../hooks/useLocaleString';

const CreatorDescription = ({ content }) => {
  const getString = useLocaleString();

  return ( // todo to refactor
    <Description
      label={ getString( 'creator' ) }
      content={ (
        <TextBox>
          { content }
        </TextBox>
      ) }
    />
  );
};

CreatorDescription.propTypes = { content: PropTypes.string.isRequired };

export default CreatorDescription;
