import { ERROR_USER_DONT_EXIST, GET_USER_NAME } from 'store/actions';

const initState = {
  userName: '',
  errors: null,
};

const reducer = ( state = initState, action = {}) => {

  switch ( action.type ) {
    case GET_USER_NAME:
      return {
        ...state,
        userName: action.name,
        errors: null,
      };
    case ERROR_USER_DONT_EXIST:
      return {
        ...state,
        userName: '',
        errors: action.errorMsg,
      };
    default:
      return state;
  }
};

export default reducer;
