import React from 'react';
import PropTypes from 'prop-types';
import useStateWithCallback from 'use-state-with-callback';
import { DELAY_DISAPPEARING } from 'constans';

import CopyTextView from 'components/copyText/CopyText.view';

const CopyText = ({ text, content }) => {
  const [ copied, setCopied ] = useStateWithCallback( false, ( copied ) => {
    if ( copied ) {
      setTimeout(() => { setCopied( false ); }, DELAY_DISAPPEARING );
    }
  });

  return (
    <CopyTextView
      copied={ copied }
      text={ text }
      content={ content }
      onClick={ () => setCopied( true ) }
    />
  );
};

CopyText.propTypes = {
  content: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default CopyText;
