import {
  ADD_TAG, REMOVE_TAG, DRAW_RESULT,
} from 'store/actions';

export const setDrawResult = ( tags ) =>  (
  dispatch, getState, { getFirestore },
) => {
  console.log( getState().ans.answers, getState().draw.tags );
};
export const addTag = () => {};
export const removeTag = () => {};

