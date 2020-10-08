import * as actionTypes from 'store/actions';

const initState = { userName: '', errors: {}};

const reducer = ( state = initState, action = {}) => {

  switch ( action.type ) {
    case actionTypes.GET_USER_NAME:
      return {
        ...state,
        userName: action.name,
      };
    case actionTypes.ERROR_USER_DONT_EXIST:
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
