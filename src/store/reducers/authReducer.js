import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from 'store/actions';

const initState = {
  isLogin: false,
  authError: null,
};

const reducer = ( state = initState, action = {}) => {
  switch ( action.type ) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        isLogin: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Logowanie nie powiodło się',
        isLogin: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default reducer;

