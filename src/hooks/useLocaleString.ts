import { useSelector } from 'react-redux';

import localizationPL from 'assets/locale/pl';
import localizationENG from 'assets/locale/eng';
import { LocaleResources } from 'assets/locale/types';
import { RootState } from 'store/reducers/rootReducer';

import { GetString } from './types';

const useLocaleString = (): GetString => {
  const language = useSelector(( state: RootState ) => state.global.language );
  let localization: LocaleResources;

  switch ( language ) {
    case 'ENG': {
      localization = localizationENG;
      break;
    }
    default: {
      localization = localizationPL;
      break;
    }
  }

  return ( resourceId ) => localization[ resourceId ] ?? '';
};

export default useLocaleString;
