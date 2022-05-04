import _groupBy from 'lodash/groupBy';
import _reduce from 'lodash/reduce';

import { IS_DEVELOPMENT_MODE } from 'constans';
import { FETCH_ANSWERS_ERROR, NO_ANSWERS_ERROR } from 'store/actions';
import {
  ActionCreator,
  AnswersAction,
  IAction,
  IActionWithPayload,
} from 'store/types';
import { FirestoreAnswer, Mapping } from 'types';
import { startDownloadCSV, getNewFileName } from 'utils/fileUtils';

// ToDo: change to general type action and then check action as described here https://phryneas.de/redux-typescript-no-discriminating-union
type AnswerActionCreator< Payload extends unknown[] = []> = ActionCreator< AnswersAction, Payload >;
type GetAnswersOnceFromFirestoreArgs =
  [ noAnswerOrRefErrorAction: IAction< unknown > | IActionWithPayload< unknown, unknown >];

export const getAnswersOnceFromFirestore: AnswerActionCreator< GetAnswersOnceFromFirestoreArgs > =
  ( noAnswerOrRefErrorAction ) =>
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
        dispatch( noAnswerOrRefErrorAction());
      }
    };

export const downloadAnswersCSV: AnswerActionCreator = () => async ( dispatch, getState ) => {
  const { id } = getState().form;

  if ( !IS_DEVELOPMENT_MODE || !id ) { return; }

  // ToDo: issue #201 - add action trigger loader on button
  await dispatch( getAnswersOnceFromFirestore({ type: NO_ANSWERS_ERROR, payload: { error: 'No answers' }}));

  // ToDo: issue #201 - Optimize grouping answers
  const groupedAnswersByAnswerID = _groupBy< FirestoreAnswer >( getState().firestore.ordered?.answers, 'answerID' );
  const groupedAnswers = _reduce< typeof groupedAnswersByAnswerID, Mapping< string >[]>(
    groupedAnswersByAnswerID,
    ( answers, currentAnswer ) => [
      ...answers,
      _reduce(
        currentAnswer,
        ( answer, { fieldName, value }) => ({ ...answer, [ fieldName ]: value }),
        /* In database doesn't exist emptyColumn fields that is appended in google forms.
           We want to be compatibility with it, so we added it to header row and this create new column. */
        { emptyColumn: '' },
      ),
    ],
    [],
  );
  const { name } = getState().firestore.data?.forms?.[ id ];

  startDownloadCSV( groupedAnswers, groupedAnswers ? name.replaceAll( ' ', '_' ) : getNewFileName());
  // ToDo: issue #201 - add action hide loader from button
};
