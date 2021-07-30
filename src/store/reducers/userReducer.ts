import {
  CLEAR_USER,
  ERROR_USER_DONT_EXIST,
  GET_CREATOR_NAME,
  GET_CURRENT_USER_ROLE,
} from 'store/actions';
import { IUserState, UserAction } from 'store/types';

const initState: IUserState = {
  creatorName: '',
  errors: null,
  currentUserRole: '',
};

const reducer = ( state = initState, action: UserAction = { type: CLEAR_USER }): IUserState => {
  switch ( action.type ) {
    case GET_CREATOR_NAME:
      return {
        ...state,
        creatorName: action.payload.name ?? '',
        errors: null,
      };
    case GET_CURRENT_USER_ROLE:
      return {
        ...state,
        currentUserRole: action.payload.currentUserRole ?? '',
        errors: null,
      };
    case ERROR_USER_DONT_EXIST:
      return {
        ...state,
        creatorName: '',
        errors: action.payload.errorMsg ?? 'An unknown error occurrence',
      };
    case CLEAR_USER:
      return initState;
    default:
      return state;
  }
};

export default reducer;
