import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/iconButton/IconButton.view';
import DrawResult from 'components/drawResult/DrawResult.view';
import SelectFilter from 'components/selectFilter';

const Draw = ({
  loadedData,
  result,
  onRandomClick,
}) => (
  <>
    <SelectFilter />
    { loadedData && <IconButton value="Wylosuj odpowiedzi" onClick={ onRandomClick } /> }
    <DrawResult
      maleName={ result.nameMale }
      femaleName={ result.nameFemale }
    />
  </>
);

Draw.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  onRandomClick: PropTypes.func.isRequired,
  result: PropTypes.objectOf( PropTypes.any ),
};

Draw.defaultProps = { result: {}};

export default Draw;
