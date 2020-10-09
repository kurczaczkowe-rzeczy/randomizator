import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/iconButton/IconButton.view';
import DrawResult from 'components/drawResult/DrawResult.view';
import SelectFilter from 'components/selectFilter';

const Draw = ({
  loadedData, onRandomClick, result,
}) => (
  <>
    <SelectFilter />
    { loadedData && <IconButton value="Wylosuj odpowiedzi" onClick={ onRandomClick } /> }
    <DrawResult
      maleName={result.nameMale}
      femaleName={result.nameFemale}
    />
  </>
);

Draw.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  result: PropTypes.objectOf( PropTypes.any ).isRequired,
  onRandomClick: PropTypes.func.isRequired,
};

Draw.defaultProps = {};

export default Draw;
