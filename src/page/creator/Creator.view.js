import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/iconButton/IconButton.view';
import Card from 'components/card/Card.view';
import DrawResult from 'components/drawResult/DrawResult.view';

const Creator = ({ onRandomClick, loadedData }) => (
  <div>
    <h1>Creator panel</h1>
    { loadedData &&
      <IconButton value="Wylosuj odpowiedzi" onClick={ onRandomClick } />}
    <Card
      title="Wylosowane odpowiedzi"
      body={(
        <DrawResult
          maleName="Imie męskie - wylosowane"
          femaleName="Imie damskie - wylosowane"
        />
      )}
    />
  </div>
);

Creator.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  onRandomClick: PropTypes.func,
};
Creator.defaultProps = { onRandomClick: () => {} };

export default Creator;
