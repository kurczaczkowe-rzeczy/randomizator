import { SET_ANSWERS } from 'store/actions';

export const setAnswers = ( answers, counter ) =>  ( dispatch ) => {
  dispatch({
    type: SET_ANSWERS, answers, counter,
  });
};
