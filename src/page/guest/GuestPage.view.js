import Description from 'components/description/Description.view';
import React from 'react';
import PropTypes from 'prop-types';

const GuestPage = ({ creatorName, formName }) => (
  <div>
    <h1>Guest panel</h1>
    <Description label="Twórca" content={creatorName} />
    <Description label="Formularz" content={formName} />
  </div>
);

GuestPage.propTypes = {
  creatorName: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
};

export default GuestPage;
