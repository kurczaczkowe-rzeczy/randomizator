import PropTypes from 'prop-types';

import useLocalize from 'hooks/useLocalize';

import Description from 'components/description/Description.view';
import TextBox from 'components/textBox/TextBox.view';

const CreatorDescription = ({ content }) => {
  const localize = useLocalize();

  return ( // todo to refactor
    <Description
      label={ localize( 'creator' ) }
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
