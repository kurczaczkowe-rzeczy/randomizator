import React from 'react';
import PropTypes from 'prop-types';

import Description from 'components/description/Description.view';

const CreatorDescription = ({ content }) => (
  <Description label="Twórca" content={ content } />
);

CreatorDescription.propTypes = { content: PropTypes.string.isRequired };

export default CreatorDescription;
