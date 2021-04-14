import React from 'react';
import PropTypes from 'prop-types';
import _includes from 'lodash/includes';

import TextNode from 'components/textNode/TextNode.view';

import classes from './drawResult.module.scss';

// ToDo create component that wraps textNodes (ref to ToDo in Form.view.tsx)
const DrawResult = ({
  maleName,
  femaleName,
  errors,
}) => (
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
    { _includes( errors, 'nameMale' ) && <p className={ classes.error }>Brak wartości do losowania</p> }

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
    { _includes( errors, 'nameFemale' ) && <p className={ classes.error }>Brak wartości do losowania</p> }

  </div>
);

DrawResult.propTypes = {
  errors: PropTypes.arrayOf( PropTypes.string ),
  femaleName: PropTypes.string,
  maleName: PropTypes.string,
};

DrawResult.defaultProps = {
  errors: [],
  femaleName: '',
  maleName: '',
};

export default DrawResult;
