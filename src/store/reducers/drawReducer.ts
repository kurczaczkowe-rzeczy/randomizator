import _without from 'lodash/without';

import {
  ADD_TAG,
  CLEAR_DRAW_RESULT,
  DRAW_RESULT,
  ERROR_DRAW_RESULT,
  REMOVE_TAG,
  REMOVE_ERROR_DRAW_RESULT,
  SET_TAGS,
  UNKNOWN_ERROR_DRAW_RESULT,
  SET_ERRORS_DRAW_RESULT,
} from 'store/actions';
import { DrawAction, IDrawState } from 'store/types';

const initState: IDrawState = {
  tags: [],
  result: {},
  errorFields: [],
  errors: null,
};
// ToDo make parentheses consistent
const reducer = ( state = initState, action: DrawAction = { type: CLEAR_DRAW_RESULT }): IDrawState => {
  switch ( action.type ) {
    case ADD_TAG:
      return { ...state, tags: [ ...state.tags, action.payload.tag ]};
    case REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(( tag, index ) => index !== action.payload.index ),
      };
    case SET_TAGS:
      return { ...state, tags: action.payload.tags };
    case DRAW_RESULT:
      return { ...state, result: action.payload.draw };
    case ERROR_DRAW_RESULT:
      return { ...state, errorFields: [ ...state.errorFields, action.payload.fieldName ]};
    case REMOVE_ERROR_DRAW_RESULT:
      return { ...state, errorFields: _without( state.errorFields, action.payload.fieldName ) };
    case SET_ERRORS_DRAW_RESULT:
      return { ...state, errorFields: action.payload.fields };
    case UNKNOWN_ERROR_DRAW_RESULT:
      return { ...state, errors: 'Unknown error' };
    case CLEAR_DRAW_RESULT:
      return { ...initState };
    default:
      return state;
  }
};

export default reducer;
