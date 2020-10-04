import React from 'react';
import PropTypes from 'prop-types';
import classes from './drawResult.module.scss';
import TextField from 'components/textField/TextField.view';

const DrawResult = ({ maleName, femaleName }) => (
  <div>
    <div className={classes.alignCenterRight}>
      <TextField value="Imie męskie" classes={classes.label} required />
      <TextField
        value={maleName} classes={classes.input} type="input-text"
        required
      />
    </div>

    <div className={classes.alignCenterRight}>
      <TextField value="Imie damskie" classes={classes.label} required />
      <TextField
        value={femaleName} classes={classes.input} type="input-text"
        required
      />
    </div>
  </div>
);

DrawResult.propTypes = {
  femaleName: PropTypes.string.isRequired,
  maleName: PropTypes.string.isRequired,
};

export default DrawResult;
