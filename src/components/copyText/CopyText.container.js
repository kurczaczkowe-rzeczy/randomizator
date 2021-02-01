import React from 'react';
import PropTypes from 'prop-types';
import useStateWithCallback from 'use-state-with-callback';
import { DELAY_DISAPPEARING } from 'constans';

import CopyTextView from 'components/copyText/CopyText.view';

// ToDo we can replace {...} with prop and pass prop to view component
const CopyText = ({
  text, content, withFlexStart,
}) => {
  const [ isCopied, setIsCopied ] = useStateWithCallback( false, ( copied ) => {
    if ( copied ) {
      setTimeout(() => { setIsCopied( false ); }, DELAY_DISAPPEARING );
    }
  });

  return (
    <CopyTextView
      withFlexStart={ withFlexStart }
      text={ text }
      content={ content }
      isCopied={ isCopied }
      onClick={ () => setIsCopied( true ) }
    />
  );
};

CopyText.propTypes = {
  content: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  withFlexStart: PropTypes.bool,
};

CopyText.defaultProps = { withFlexStart: false };

export default CopyText;
