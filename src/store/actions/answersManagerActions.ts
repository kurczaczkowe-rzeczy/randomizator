import { ThunkAction } from 'redux-thunk';
import { SET_EDITED_ANSWER, UNSET_EDITED_ANSWER } from 'store/actions';

import {
  AnswersManagerAction,
  IAnswersManagerActionsPayload,
  IAnswersManagerState,
} from 'store/types';

type AnswersManagerThunkAction = ThunkAction<void, IAnswersManagerState, unknown, AnswersManagerAction>;

/** Action trigger add answer id to array of edited answers. */
export const setEditedAnswer = ( answerID: IAnswersManagerActionsPayload[ 'answerID' ]): AnswersManagerThunkAction =>
  ( dispatch ) => { dispatch({ type: SET_EDITED_ANSWER, payload: { answerID }}); };

/** Action trigger remove answer id from array of edited answers. */
export const unsetEditedAnswer = ( answerID: IAnswersManagerActionsPayload[ 'answerID' ]): AnswersManagerThunkAction =>
  ( dispatch ) => { dispatch({ type: UNSET_EDITED_ANSWER, payload: { answerID }}); };
