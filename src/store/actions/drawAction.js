import _map from 'lodash/map';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';
import _filter from 'lodash/filter';

import { randomItem, filterArrayByTag } from './drawAction.utils';
import {
  ADD_TAG,
  DRAW_RESULT,
  REMOVE_TAG,
  SET_TAGS,
  ERROR_DRAW_RESULT,
  SET_ERROR_DRAW_RESULT,
} from 'store/actions';

export const setDrawResult = () => ( dispatch, getState ) => {
  const draw = {};
  const { answers } = getState().ans;
  const tags = _map( _get(
    getState(), 'draw.tags', '',
  ), ( value ) => value.text );

  _forEach( answers, ( arrayOfAnswer, key ) => {
    if ( tags.length !== 0 ) {
      const filteredArray = filterArrayByTag( arrayOfAnswer, tags );

      console.log({ filteredArray });
      if ( _isEmpty( filteredArray )) {
        dispatch({ type: ERROR_DRAW_RESULT, key });
      } else {
        const filter = _filter( getState().form.errorField, ( error ) => error === key );

        dispatch({
          type: SET_ERROR_DRAW_RESULT,
          errors: filter,
        });
      }

      draw[ key ] = randomItem( filteredArray );
    } else {
      draw[ key ] = randomItem( arrayOfAnswer );
    }

  });

  dispatch({
    type: DRAW_RESULT,
    draw,
  });
};
export const addTag = ( tag ) => ( dispatch ) => {
  dispatch({
    type: ADD_TAG,
    tag,
  });
};
export const removeTag = ( index ) => ( dispatch ) => {
  dispatch({
    type: REMOVE_TAG,
    index,
  });
};

export const setTags = ( tags ) => ( dispatch ) => {
  dispatch({
    type: SET_TAGS,
    tags,
  });
};
