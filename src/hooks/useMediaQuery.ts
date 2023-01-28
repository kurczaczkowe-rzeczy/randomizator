import { useEffect, useState } from 'react';

interface IOptions { maxSize: number }

interface IUseMediaQuery { matches: boolean }

const useMediaQuery = ( options: IOptions ): IUseMediaQuery => {
  const [ matches, setMatches ] = useState( false );

  useEffect(() => {
    const resizeObserver = new ResizeObserver(( entries ) => {
      entries.forEach(({ contentRect }) => {
        if ( !matches && contentRect.width <= options.maxSize ) {
          setMatches( true );

          return;
        }
        if ( matches && contentRect.width > options.maxSize ) {
          setMatches( false );
        }
      });
    });

    resizeObserver.observe( document.body );

    return () => {
      resizeObserver.unobserve( document.body );
    };
  }, [ matches, options.maxSize ]);

  return { matches };
};

export default useMediaQuery;
