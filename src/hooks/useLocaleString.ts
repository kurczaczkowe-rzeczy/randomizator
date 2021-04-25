import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';

import stringsPl from 'assets/locale/pl';
import stringsEng from 'assets/locale/eng';
import { IResourceType } from 'types/types';

const useLocaleString = (): (( resourceId: string ) => ( string | undefined )) => {
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

  const getString = ( resourceId: string ): ( string | undefined ) => localeFile[ resourceId ];

  return getString;
};

export default useLocaleString;
