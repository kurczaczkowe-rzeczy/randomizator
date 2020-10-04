import React from 'react';

import PropTypes from 'prop-types';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import classes from './iconButton.module.scss';

const IconButton = ({ value }) => (
  <button type="button" className={classes.button}>
    <ScatterPlotIcon classes={{ root: classes.icon } } fontSize="large" />
    <span>{value}</span>
  </button>
);

IconButton.propTypes = { value: PropTypes.string.isRequired };

export default IconButton;
