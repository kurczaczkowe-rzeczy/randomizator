import React from 'react';
import PropTypes from 'prop-types';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import classes from './iconButton.module.scss';

const IconButton = ({
  value, onClick, icon,
}) => (
  <button type="button" className={ classes.button } onClick={ onClick }>
    { icon
      ? <ExitToAppIcon classes={ { root: classes.icon } } />
      : <ScatterPlotIcon classes={ { root: classes.icon } } fontSize="large" />}
    <span>{ value }</span>
  </button>
);

IconButton.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};
IconButton.defaultProps = {
  icon: null,
  onClick: () => {},
};

export default IconButton;
