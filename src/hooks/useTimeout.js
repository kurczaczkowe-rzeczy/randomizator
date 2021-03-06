import { useState } from 'react';

const useTimeout = ( delay ) => {
  const [ timeoutId, setTimeoutId ] = useState( -1 );

  const runTimeout = ( callback, ...args ) => {
    if ( timeoutId > -1 ) {
      stopTimeout( callback, ...args );
    }
    setTimeoutId( setTimeout( callback, delay ));
  };
  const stopTimeout = ( callback, ...args ) => {
    clearTimeout( timeoutId );
    setTimeoutId( -1 );
    callback( ...args );
  };

  return { runTimeout, stopTimeout };
};

export default useTimeout;
