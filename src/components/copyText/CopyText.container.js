import React from 'react';
import PropTypes from 'prop-types';
import useStateWithCallback from 'use-state-with-callback';
import { DELAY_DISAPPEARING } from 'constans';

import CopyTextView from 'components/copyText/CopyText.view';

const CopyText = ({ link, component }) => {
  const [ copied, setCopied ] = useStateWithCallback( false, ( copied ) => {
    if ( copied ) {
      setTimeout(() => { setCopied( false ); }, DELAY_DISAPPEARING );
    }
  });

  return (
    <CopyTextView
      copied={ copied }
      link={ link }
      component={ component }
      onClick={ () => setCopied( true ) }
    />
  );
};

CopyText.propTypes = {
  component: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default CopyText;
