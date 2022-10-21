import { CLEAR_ANSWERS, NO_ANSWERS_ERROR } from 'store/actions';
import { AnswersAction, IState } from 'store/types';

const initState: IState = { errors: null };

const reducer = ( state = initState, action: AnswersAction = { type: CLEAR_ANSWERS }): IState => {
  switch ( action.type ) {
    case NO_ANSWERS_ERROR:
      return { ...state, errors: action.payload.error };
    case CLEAR_ANSWERS:
      return { ...initState };
    default:
      return state;
  }
};

export default reducer;
