import {
  ADD_TAG, REMOVE_TAG, DRAW_RESULT, SET_TAGS,
} from 'store/actions';

export const setDrawResult = ( tags ) =>  ( dispatch, getState ) => {
  console.log( getState().ans.answers, getState().draw.tags );
  dispatch({ type: DRAW_RESULT });
};
export const addTag = ( tag ) =>  ( dispatch ) => {
  console.log( tag );
  dispatch({ type: ADD_TAG, tag });
};
export const removeTag = ( index ) =>  ( dispatch ) => {
  dispatch({ type: REMOVE_TAG, index });
};

export const setTags = ( tags ) =>  ( dispatch ) => {
  dispatch({ type: SET_TAGS, tags });
};
