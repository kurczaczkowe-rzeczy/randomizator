import { SET_ANSWERS } from 'store/actions';

// ToDo change counter name to eg. answersCounter or abandon it
export const setAnswers = ( answers, counter ) => ( dispatch ) => {
  dispatch({
    type: SET_ANSWERS, answers, counter,
  });
};
