import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from 'store/actions';

const initState = { authError: null };

const reducer = ( state = initState, action = {}) => {
  switch ( action.type ) {
    case LOGIN_SUCCESS:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Logowanie nie powiodło się', // ToDo put this into global messages files
      };
    default:
      return state;
  }
};

export default reducer;

