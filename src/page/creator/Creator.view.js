import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';
import DrawResult from 'components/drawResult/DrawResult.view';
import IconButton from 'components/iconButton/IconButton.view';

const Creator = ({
  result, onRandomClick, loadedData,
}) => (
  <div>
    <h1>Creator panel</h1>
    { loadedData &&
      <IconButton value="Wylosuj odpowiedzi" onClick={ onRandomClick } />}
    <Card
      title="Wylosowane odpowiedzi"
      body={(
        <DrawResult
          maleName={result.nameMale}
          femaleName={result.nameFemale}
        />
      )}
    />
  </div>
);

Creator.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  result: PropTypes.objectOf( PropTypes.any ).isRequired,
  onRandomClick: PropTypes.func.isRequired,
};

export default Creator;
