import _filter from 'lodash/filter';

import {
  CLEAR_ANSWERS_MANAGER,
  SET_EDITED_ANSWER,
  UNSET_EDITED_ANSWER,
} from 'store/actions';
import { AnswersManagerAction, IAnswersManagerState } from 'store/types';

const initialState: IAnswersManagerState = { editedAnswers: []};
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
    case CLEAR_ANSWERS_MANAGER: { return initialState; }
    default: { return state; }
  }
};

export default reducer;
