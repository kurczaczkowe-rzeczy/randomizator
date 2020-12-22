import React from 'react';
import PropTypes from 'prop-types';
import useStateWithCallback from 'use-state-with-callback';
import { DELAY_DISAPPEARING } from 'constans';

import CopyTextView from 'components/copyText/CopyText.view';

const CopyText = ({ text, content }) => {
  const [ isCopied, setIsCopied ] = useStateWithCallback( false, ( copied ) => {
    if ( copied ) {
      setTimeout(() => { setIsCopied( false ); }, DELAY_DISAPPEARING );
    }
  });

  return (
    <CopyTextView
      isCopied={ isCopied }
      text={ text }
      content={ content }
      onClick={ () => setIsCopied( true ) }
    />
  );
};

CopyText.propTypes = {
  content: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default CopyText;
