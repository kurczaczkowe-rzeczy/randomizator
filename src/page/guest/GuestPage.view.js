import Description from 'components/description/Description.view';
import React from 'react';
import PropTypes from 'prop-types';

const GuestPage = ({ creatorName }) => (
  <div>
    <h1>Guest panel</h1>
    <Description label="Twórca" content={creatorName} />
    {/* <Description label="Formularz" content="Imiona zwierząt anglojęzycznych" />*/}
  </div>
);

GuestPage.propTypes = { creatorName: PropTypes.string.isRequired };

export default GuestPage;
