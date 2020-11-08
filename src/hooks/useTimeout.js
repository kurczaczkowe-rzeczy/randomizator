import { useState } from 'react';

const useTimeout = ( callback, delay ) => {
  const [ timeoutId, setTimeoutId ] = useState( -1 );

  const runTimeout = () => {
    if ( timeoutId > -1 ) {
      stopTimeout();
    }
    setTimeoutId( setTimeout( callback, delay ));
  };
  const stopTimeout = () => {
    clearTimeout( timeoutId );
    setTimeoutId( -1 );
  };

  return { runTimeout, stopTimeout };
};

export default useTimeout;
