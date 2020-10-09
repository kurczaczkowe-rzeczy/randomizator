import React from 'react';
import PropTypes from 'prop-types';

import DrawView from './Draw.view';

const Draw = ({
  loadedData, onRandomClick, result,
}) => (
  <DrawView loadedData={loadedData} onRandomClick={onRandomClick} result={result} />
);

Draw.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  result: PropTypes.objectOf( PropTypes.any ).isRequired,
  onRandomClick: PropTypes.func.isRequired,
};

export default Draw;
