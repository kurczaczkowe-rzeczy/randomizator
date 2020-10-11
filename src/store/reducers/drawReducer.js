import {
  ADD_TAG,
  DRAW_RESULT, ERROR_DRAW_RESULT,
  REMOVE_TAG, SET_ERROR_DRAW_RESULT,
  SET_TAGS,
} from 'store/actions';

const initState = {
  tags: [],
  result: {},
  errorField: [],
};

const reducer = ( state = initState, action = {}) => { // id:'' text:''
  switch ( action.type ) {
    case ADD_TAG:
      return {
        ...state,
        tags: [ ...state.tags, action.tag ],
      };
    case REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(( tag, index ) => index !== action.index ),
      };
    case SET_TAGS:
      return {
        ...state,
        tags: action.tags,
      };
    case DRAW_RESULT:
      return {
        ...state,
        result: action.draw,
      };
    case ERROR_DRAW_RESULT:
      return {
        ...state,
        errorField: [ ...state.errorField, action.key ],
      };
    case SET_ERROR_DRAW_RESULT:
      return {
        ...state,
        errorField: action.errors,
      };
    default:
      return state;
  }
};

export default reducer;
