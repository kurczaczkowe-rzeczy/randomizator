import { ThunkAction } from 'redux-thunk';
import {
  SET_DIRTY_ANSWER,
  SET_EDITED_ANSWER,
  UNSET_EDITED_ANSWER,
  CLEAR_ANSWERS_MANAGER,
} from 'store/actions';

import {
  AnswersManagerAction,
  IAnswersManagerActionsPayload,
  IAnswersManagerDirtyAnswerPayload,
  IAnswersManagerState,
} from 'store/types';

type AnswersManagerThunkAction = ThunkAction<void, IAnswersManagerState, unknown, AnswersManagerAction>;

/** Action trigger add answer id to array of edited answers. */
export const setEditedAnswer = ( answerID: IAnswersManagerActionsPayload[ 'answerID' ]): AnswersManagerThunkAction =>
  ( dispatch ) => { dispatch({ type: SET_EDITED_ANSWER, payload: { answerID }}); };

/** Action trigger remove answer id from array of edited answers. */
export const unsetEditedAnswer = ( answerID: IAnswersManagerActionsPayload[ 'answerID' ]): AnswersManagerThunkAction =>
  ( dispatch ) => { dispatch({ type: UNSET_EDITED_ANSWER, payload: { answerID }}); };

/** Action trigger add answer to array with dirty state of form field array */
export const setDirtyAnswer = ( answerIndex: IAnswersManagerDirtyAnswerPayload[ 'answerIndex' ],
  answer: IAnswersManagerDirtyAnswerPayload[ 'answer' ]): AnswersManagerThunkAction =>
  ( dispatch ) => { dispatch({ type: SET_DIRTY_ANSWER, payload: { answerIndex, answer }}); };

/** Action trigger clear whole answer manager store. */
export const clearAnswerManager = (): AnswersManagerThunkAction =>
  ( dispatch ) => { dispatch({ type: CLEAR_ANSWERS_MANAGER }); };
