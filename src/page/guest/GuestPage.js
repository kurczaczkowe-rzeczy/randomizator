import Description from 'components/description/Description.view';
import React from 'react';

const GuestPage = () => (
  <div>
    <h1>Guest panel</h1>
    <Description label="Twórca" content="Szczęśliwy Ziemniak" />
    <Description label="Formularz" content="Imiona zwierząt anglojęzycznych" />
  </div>
);

export default GuestPage;
