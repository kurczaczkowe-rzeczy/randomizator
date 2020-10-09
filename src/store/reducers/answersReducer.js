import { SET_ANSWERS } from 'store/actions';

const initState = { answers: [], isLoaded: false };

const reducer = ( state = initState, action = {}) => {
  if ( action.type === SET_ANSWERS ) {
    return {
      ...state,
      answers: action.answers,
      isLoaded: true,
    };
  }

  return state;
};

export default reducer;
