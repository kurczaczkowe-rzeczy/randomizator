import _map from 'lodash/map';

import { startDownloadCSV } from 'utils/fileUtils';
import { Filters } from 'hooks/types';
import { ANSWERS_ERROR, NO_ANSWERS_ERROR } from 'store/actions';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import {
  ActionCreator,
  AnswersAction,
  IAction,
  IActionWithPayload,
} from 'store/types';
import { IAnswer } from 'types';
import { CARDS, IS_DEVELOPMENT_MODE, PAGES } from 'constans';

// ToDo: change to general type action and then check action as described here https://phryneas.de/redux-typescript-no-discriminating-union
type AnswerActionCreator< Payload extends unknown[] = []> = ActionCreator< AnswersAction, Payload >;
type GetAnswersOnceFromFirestoreArgs = [
  noAnswerOrRefErrorAction: IAction< string > | IActionWithPayload< string, unknown >,
  filters?: Filters,
];

export const getAnswersOnceFromFirestore: AnswerActionCreator< GetAnswersOnceFromFirestoreArgs > =
  ( noAnswerOrRefErrorAction, filters = []) =>
    async (
      dispatch,
      getState,
      { getFirestore },
    ) => {
      const firestore = getFirestore();
      const { id } = getState().form;
      let answersRef;

      try {
        answersRef = await firestore.get({
          collectionGroup: 'fields',
          where: [
            [
              'formID',
              '==',
              id,
            ],
            ...filters,
          ],
          storeAs: 'answers',
        });
      } catch ( e: unknown ) {
      // ToDo: better error handling
        console.error( 'Error occurred on fetch once answers: ', e );
        dispatch({ type: FETCH_ANSWERS_ERROR, payload: { error: 'Network error' }});
      }

    /* ToDo: If there is no answers dispatch other error
     ToDo: If firestore's ref not exist, was not properly created dispatch another error */
      if ( !answersRef?.size ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
        dispatch( noAnswerOrRefErrorAction );
      }
    };

export const downloadAnswersCSV: AnswerActionCreator = () => async ( dispatch, getState ) => {
  if ( !IS_DEVELOPMENT_MODE ) {
    // ToDo: show snackbar
    return;
  }

  const { id } = getState().form;

  if ( !id ) {
    // ToDo: show snackbar
    return;
  }

  dispatch( showLoader( PAGES.CREATOR, CARDS.ANSWERS_DOWNLOADER ));
  try {
    await dispatch( getAnswersOnceFromFirestore({ type: NO_ANSWERS_ERROR, payload: { error: 'No answers' }}));
  } catch {
    dispatch( hideLoader( PAGES.CREATOR, CARDS.ANSWERS_DOWNLOADER ));

    return;
  }

  const backupAnswers = _map< IAnswer, Omit< IAnswer, 'formID' | 'timestamp' | 'id' > & { emptyColumn: '' }>(
    getState().firestore.ordered.answers,
    ({ answerID, fieldName, value, weight }) => ({ emptyColumn: '', answerID, fieldName, value, weight }),
  );
  const { name } = getState().firestore.data?.forms?.[ id ];

  startDownloadCSV( backupAnswers, name.replaceAll( ' ', '_' ));
  dispatch( hideLoader( PAGES.CREATOR, CARDS.ANSWERS_DOWNLOADER ));
};
