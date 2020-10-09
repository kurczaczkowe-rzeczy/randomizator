import React from 'react';
import PropTypes from 'prop-types';

import TextNode from 'components/textNode/TextNode.view';

import classes from './drawResult.module.scss';

// ToDo create component that wraps textNodes (ref to ToDo in Form.view.js)
const DrawResult = ({ maleName, femaleName }) => (
  <div>
    <div className={ classes.alignCenterRight }>
      <TextNode
        required
        value="Imie męskie"
        classes={ classes.label }
      />
      <TextNode
        required
        value={ maleName }
        classes={ classes.input }
        type="input-text"
      />
    </div>

    <div className={ classes.alignCenterRight }>
      <TextNode
        required
        value="Imie damskie"
        classes={ classes.label }
      />
      <TextNode
        required
        value={ femaleName }
        classes={ classes.input }
        type="input-text"
      />
    </div>
  </div>
);

DrawResult.propTypes = {
  femaleName: PropTypes.string,
  maleName: PropTypes.string,
};

DrawResult.defaultProps = {
  femaleName: ' ',
  maleName: ' ',
};

export default DrawResult;
