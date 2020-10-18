import { ADD_FORM, CLEAR_FORMS } from 'store/actions';

const initState = {
  forms: [],
  errors: null,
};

const reducer = ( state = initState, action = {}) => {
  switch ( action.type ) {
    case ADD_FORM:
      return {
        ...state,
        forms: [ ...state.forms, action.forms ],
        errors: null,
      };
    case CLEAR_FORMS:
      return { ...initState };
    default:
      return state;
  }
};

export default reducer;
