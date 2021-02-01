import { SET_ANSWERS } from 'store/actions';

const initState = {
  isLoaded: false,
  counter: 0, // ToDo change name or remove completely
  answers: [],
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
