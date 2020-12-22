import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import { DELAY_FORM_NAME_HIGHLIGHT } from 'constans';

import useTimeout from 'hooks/useTimeout';

import cardClasses from 'components/card/card.module.scss';
import descriptionClasses from 'components/description/description.module.scss';

import FormView from './Form.view';

// ToDo refactor when need to be used in another component
const toggleHighlight = ( toRemove = false ) => {
  const cardElement = document.querySelector( '#formName' );
  const [ , contentElement ] = cardElement.children[ 0 ].children;

  if ( toRemove ) {
    cardElement.classList.remove( cardClasses.highlight );
    contentElement.classList.remove( descriptionClasses.highlight );
  } else {
    cardElement.classList.add( cardClasses.highlight );
    contentElement.classList.add( descriptionClasses.highlight );
  }
};

const Form = ({
  preview,
  nameOfForm,
  onSubmit,
}) => {
  const { runTimeout, stopTimeout } = useTimeout( DELAY_FORM_NAME_HIGHLIGHT );

  const handleSubmit = useCallback(( event ) => {
    event.preventDefault();
    const data = new FormData( event.target );
    const fromInput = data.get( 'check_is_not_robot' );

    if ( _isEmpty( fromInput )) {
      alert( 'Wpisz nazwę formularza we właściwym miejscu' );
    } else if ( !_isEqual( fromInput, nameOfForm )) {
      alert( 'Wpisz poprawną nazwę formularza' );
    } else {
      onSubmit( data.get( 'name_male' ), data.get( 'name_female' ));
    }
  }, [ nameOfForm, onSubmit ]);

  const highlightFormName = useCallback(( event ) => {
    const { target: { value }} = event;

    if ( value === nameOfForm ) {
      return stopTimeout( toggleHighlight, true );
    }

    return runTimeout( toggleHighlight );
  }, [
    nameOfForm,
    runTimeout,
    stopTimeout,
  ]);

  return (
    <FormView
      preview={ preview }
      nameOfForm={ nameOfForm }
      onSubmit={ handleSubmit }
      highlightFormName={ highlightFormName }
    />
  );
};

Form.propTypes = {
  highlightFormName: PropTypes.func,
  nameOfForm: PropTypes.string,
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  nameOfForm: '',
  preview: false,
  highlightFormName: () => {},
  onSubmit: () => {},
};

const mapStateToProps = ( state ) => ({ nameOfForm: state.form.formName });

export default connect( mapStateToProps )( Form );
