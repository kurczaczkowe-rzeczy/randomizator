import React from 'react';
import PropTypes from 'prop-types';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';

import classes from './iconButton.module.scss';

const IconButton = ({ value, onClick }) => (
  <button type="button" className={ classes.button } onClick={ onClick }>
    <ScatterPlotIcon classes={{ root: classes.icon }} fontSize="large" />
    <span>{ value }</span>
  </button>
);

IconButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
IconButton.defaultProps = { onClick: () => {} };

export default IconButton;
