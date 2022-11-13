import PropTypes from 'prop-types';

import useLocalize from 'hooks/useLocalize';

import Description from 'components/description/Description.view';

const FormName = ({ content }) => {
  const localize = useLocalize();

  return ( // todo to refactor
    <Description
      label={ localize( 'form' ) }
      content={ content }
    />
  );
};

FormName.propTypes = { content: PropTypes.node.isRequired };

export default FormName;
