import _filter from 'lodash/filter';

import {
  CLEAR_ANSWERS_MANAGER,
  SET_DIRTY_ANSWER,
  SET_EDITED_ANSWER,
  UNSET_EDITED_ANSWER,
} from 'store/actions';
import { AnswersManagerAction, IAnswersManagerState } from 'store/types';

const initialState: IAnswersManagerState = {
  editedAnswers: [],
  areDirtyAnswers: false,
  dirtyAnswer: [],
};
const initialAction: AnswersManagerAction = { type: CLEAR_ANSWERS_MANAGER };

const reducer = ( state = initialState, action: AnswersManagerAction = initialAction ): IAnswersManagerState => {
  switch ( action.type ) {
    case SET_EDITED_ANSWER: {
      return {
        ...state,
        editedAnswers: [ ...state.editedAnswers, action.payload.answerID ],
      };
    }
    case UNSET_EDITED_ANSWER: {
      return {
        ...state,
        editedAnswers: _filter( state.editedAnswers, ( answerID ) => answerID !== action.payload.answerID ),
      };
    }
    case SET_DIRTY_ANSWER: {
      const { answerIndex, answer } = action.payload;
      const newDirtyAnswer = [ ...state.dirtyAnswer ];

      newDirtyAnswer[ answerIndex ] = answer;

      return {
        ...state,
        areDirtyAnswers: true,
        dirtyAnswer: newDirtyAnswer,
      };
    }
    case CLEAR_ANSWERS_MANAGER: { return initialState; }
    default: { return state; }
  }
};

export default reducer;
