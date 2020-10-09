import {
  ADD_TAG, DRAW_RESULT, REMOVE_TAG,
} from 'store/actions';

const initState = { tags: [], result: {}};

const reducer = ( state = initState, action = {}) => { // id:'' text:''
  switch ( action.type ) {
    case ADD_TAG:
      return {
        ...state,
        tags: state.tags.push( action.tag ),
      };
    case REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(( tag ) => tag.id !== action.tag.id ),
      };
    case DRAW_RESULT:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
