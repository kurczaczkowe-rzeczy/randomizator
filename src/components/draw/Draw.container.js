import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DrawView from './Draw.view';
// ToDo remove this component, is redundant
const Draw = ({
  loadedData,
  result,
  errors,
  onRandomClick,
}) => (
  <DrawView
    loadedData={ loadedData }
    result={ result }
    errors={ errors }
    onRandomClick={ onRandomClick }
  />
);

Draw.propTypes = {
  onRandomClick: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf( PropTypes.string ),
  loadedData: PropTypes.bool,
  result: PropTypes.objectOf( PropTypes.any ),
};

Draw.defaultProps = {
  loadedData: false,
  result: {},
  errors: [],
};

const mapStateToProps = ( state ) => ({
  loadedData: state.ans.isLoaded,
  result: state.draw.result,
  errors: state.draw.errorField,
});

export default connect( mapStateToProps )( Draw );
