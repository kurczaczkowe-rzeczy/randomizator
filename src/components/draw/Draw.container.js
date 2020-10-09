import React from 'react';
import PropTypes from 'prop-types';

import DrawView from './Draw.view';
import { connect } from 'react-redux';

const Draw = ({
  loadedData, onRandomClick, result,
}) => (
  <DrawView loadedData={loadedData} onRandomClick={onRandomClick} result={result} />
);

Draw.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  onRandomClick: PropTypes.func.isRequired,
  result: PropTypes.objectOf( PropTypes.any ),
};

Draw.defaultProps = { result: {}};

const mapStateToProps = ( state ) => ({ result: state.draw.result });

export default connect( mapStateToProps )( Draw );
