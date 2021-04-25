import { useSelector } from 'react-redux';

import stringsPl from 'assets/locale/pl';
import stringsEng from 'assets/locale/eng';
import { RootState } from 'store/reducers/rootReducer';

import { GetString, IResourceType } from './types';

const useLocaleString = (): GetString => {
  const language = useSelector(( state: RootState ) => state?.global.language );
  let localeFile: IResourceType;

  switch ( language ) {
    case 'ENG': {
      localeFile = stringsEng;
      break;
    }
    default: {
      localeFile = stringsPl;
      break;
    }
  }

  return ( resourceId ): string => localeFile[ resourceId ] ?? '';
};

export default useLocaleString;
