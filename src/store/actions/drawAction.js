import _map from 'lodash/map';
import _get from 'lodash/get';
import _forEach from 'lodash/forEach';

import { randomItem, filterArrayByTag } from './drawAction.utils';
import {
  ADD_TAG, DRAW_RESULT, REMOVE_TAG, SET_TAGS,
} from 'store/actions';

export const setDrawResult = () =>  ( dispatch, getState ) => {
  const draw = { };
  const { answers } = getState().ans;
  const tags = _map( _get(
    getState(), 'draw.tags', '',
  ), ( value ) => value.text );

  _forEach( answers, ( arrayOfAnswer, key ) => {
    draw[ key ] = tags.length
      ? randomItem( filterArrayByTag( arrayOfAnswer, tags ))
      : randomItem( arrayOfAnswer );
  });

  dispatch({
    type: DRAW_RESULT,
    draw,
  });
};
export const addTag = ( tag ) =>  ( dispatch ) => {
  dispatch({ type: ADD_TAG, tag });
};
export const removeTag = ( index ) =>  ( dispatch ) => {
  dispatch({ type: REMOVE_TAG, index });
};

export const setTags = ( tags ) =>  ( dispatch ) => {
  dispatch({ type: SET_TAGS, tags });
};
