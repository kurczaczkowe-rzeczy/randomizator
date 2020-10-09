import {
  ADD_TAG, DRAW_RESULT, REMOVE_TAG, SET_TAGS,
} from 'store/actions';

const initState = { tags: [], result: {}};

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
    default:
      return state;
  }
};

export default reducer;
