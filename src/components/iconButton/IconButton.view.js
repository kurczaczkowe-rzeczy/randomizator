import React from 'react';
import PropTypes from 'prop-types';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import classNames from 'classnames';

import classes from './iconButton.module.scss';

// ToDo: to refactor
const IconButton = ({
  value,
  icon,
  onClick,
}) => (
  <button
    type="button"
    className={ classes.button }
    onClick={ onClick }
  >
    { icon
      ? <ExitToAppIcon classes={{ root: classNames( classes.icon, classes.moreSpace ) }} />
      : <ScatterPlotIcon classes={{ root: classes.icon }} />}
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
