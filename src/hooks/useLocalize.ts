import useTypedSelector from 'hooks/useTypedSelector';
import localizationPL from 'assets/locale/pl';
import localizationENG from 'assets/locale/eng';
import { Language } from 'store/types';

import { Localize } from './types';

const localizationMap = new Map([
  [ 'PL', localizationPL ],
  [ 'ENG', localizationENG ],
]);

export const prepareLocalize = ( language: Language ): Localize => {
  const localization = localizationMap.get( language ) ?? localizationPL;

  return ( resourceId ) => localization[ resourceId ] ?? '';
};

const useLocalize = (): Localize => {
  const language = useTypedSelector(({ global: { language }}) => language );

  return prepareLocalize( language );
};

export default useLocalize;
