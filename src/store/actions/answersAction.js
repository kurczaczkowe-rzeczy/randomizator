import { SET_ANSWERS } from 'store/actions';

export const setAnswers = ( answers ) =>  (
  dispatch, getState, { getFirestore },
) => {
  dispatch({ type: SET_ANSWERS, answers });
};
