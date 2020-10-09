import { SET_ANSWERS } from 'store/actions';

const initState = {
  answers: [], isLoaded: false, counter: 0,
};

const reducer = ( state = initState, action = {}) => {
  if ( action.type === SET_ANSWERS ) {
    return {
      ...state,
      answers: action.answers,
      counter: action.counter,
      isLoaded: true,
    };
  }

  return state;
};

export default reducer;
