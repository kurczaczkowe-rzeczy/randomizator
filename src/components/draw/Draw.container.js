import React from 'react';
import PropTypes from 'prop-types';

import DrawView from './Draw.view';
import { connect } from 'react-redux';

const Draw = ({
  loadedData,
  onRandomClick,
  result,
}) => (
  <DrawView loadedData={loadedData} onRandomClick={onRandomClick} result={result} />
);

Draw.propTypes = {
  onRandomClick: PropTypes.func.isRequired,
  loadedData: PropTypes.bool,
  result: PropTypes.objectOf( PropTypes.any ),
};

Draw.defaultProps = {
  loadedData: false,
  result: {},
};

const mapStateToProps = ( state ) => ({
  loadedData: state.ans.isLoaded,
  result: state.draw.result,
});

export default connect( mapStateToProps )( Draw );
