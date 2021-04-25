import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';
import useLocaleString from '../../hooks/useLocaleString';

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
