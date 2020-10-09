import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './answersCounter.module.scss';

const AnswersCounter = ({ counter }) => (
  <h3 className={ classes.title }>
    Ilość odpowiedzi:
    {' '}
    <span>{ counter }</span>
  </h3>
);

AnswersCounter.propTypes = { counter: PropTypes.number };

AnswersCounter.defaultProps = { counter: 0 };

const mapStateToProps = ( state ) => ({ counter: state.ans.counter });

export default connect( mapStateToProps )( AnswersCounter );
