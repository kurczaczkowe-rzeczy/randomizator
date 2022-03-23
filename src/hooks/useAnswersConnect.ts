import { useCallback, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getSnapshotByObject } from 'redux-firestore';
import { useFirestoreConnect } from 'react-redux-firebase';
import _isEqual from 'lodash/isEqual';
import _last from 'lodash/last';

import { DEFAULT_COUNT } from 'constans';
import useTypedSelector from 'hooks/useTypedSelector';
import { Answers } from 'types';

import {
  IUseAnswersConnectParams,
  IUseAnswersConnectReturn,
  DocumentOrQuerySnapshot,
} from './types';

/** Hook allows component to subscribe answer with optionally provided filters. */
const useAnswersConnect = ({
  limit = DEFAULT_COUNT,
  filters = [],
}: IUseAnswersConnectParams = {}): IUseAnswersConnectReturn => {
  const [ startAfter, setStartAfter ] = useState< DocumentOrQuerySnapshot >( null );

  const formID = useTypedSelector(({ form: { id }}) => id );
  const answers = useTypedSelector< Answers >(({ firestore: { ordered: { answers }}}) => answers, _isEqual );
  const isRequesting = useTypedSelector(({ firestore: { status: { requesting: { answers }}}}) => !!answers );

  useFirestoreConnect([
    {
      collectionGroup: 'fields',
      where: [
        [
          'formID',
          '==',
          formID,
        ],
        ...filters,
      ],
      orderBy: [ 'timestamp', 'asc' ],
      limit,
      startAfter,
      storeAs: 'answers',
    },
  ]);

  const updateStartAfter = useCallback(() => {
    const newStartAfter = getSnapshotByObject( _last( answers ));

    if ( newStartAfter && !_isEqual( startAfter, newStartAfter )) {
      setStartAfter( getSnapshotByObject( _last( answers )));
    }
  }, [ answers, startAfter ]);

  const isLoading = isRequesting || !startAfter;

  return {
    formID,
    answers,
    isLoading,
    updateStartAfter,
  };
};

export default useAnswersConnect;
