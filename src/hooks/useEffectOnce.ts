import { useEffect, EffectCallback } from 'react';

/** Hooks allows runs effect only once after first render. */
const useEffectOnce = ( effect: EffectCallback ): void => {
  useEffect( effect, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useEffectOnce;
