import PropTypes from 'prop-types';

import useLocaleString from 'hooks/useLocaleString';

import Description from 'components/description/Description.view';

const FormName = ({ content }) => {
  const getString = useLocaleString();

  return ( // todo to refactor
    <Description
      label={ getString( 'form' ) }
      content={ content }
    />
  );
};

FormName.propTypes = { content: PropTypes.node.isRequired };

export default FormName;
