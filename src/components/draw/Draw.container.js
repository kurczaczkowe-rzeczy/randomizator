import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DrawView from './Draw.view';

const Draw = ({
  loadedData,
  result,
  onRandomClick,
}) => (
  <DrawView
    loadedData={ loadedData }
    result={ result }
    onRandomClick={ onRandomClick }
  />
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
