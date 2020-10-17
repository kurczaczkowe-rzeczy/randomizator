import { ADD_FORM } from 'store/actions';

const initState = {
  forms: [],
  errors: null,
};

const reducer = ( state = initState, action = {}) => {
  switch ( action.type ) {
    case ADD_FORM:
      return {
        ...state,
        forms: action.forms,
        errors: null,
      };
    default:
      return state;
  }
};

export default reducer;
