import { GET_FORM_NAME, ERROR_FORM_DONT_EXIST } from 'store/actions';

const initState = {
  formName: '',
  errors: {},
};

const reducer = ( state = initState, action = {}) => {
  switch ( action.type ) {
    case GET_FORM_NAME:
      return {
        ...state,
        formName: action.name,
      };
    case ERROR_FORM_DONT_EXIST:
      return {
        ...state,
        formName: '',
        errors: action.errorMsg,
      };
    default:
      return state;
  }
};

export default reducer;
