import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';
import CopyLink from 'components/copyLink';

const FormList = ({ content, userID }) => (
  <>
    <Description label="Formularz" content={ content } />
    <CopyLink userID={ userID } />
  </>
);

FormList.propTypes = {
  content: PropTypes.string.isRequired,
  userID: PropTypes.string,
};

FormList.defaultProps = { userID: '' };

export default FormList;

