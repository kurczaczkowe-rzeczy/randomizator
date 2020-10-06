import * as actionTypes from 'store/actions';

const initState = {
  users: [
    { uid: 'ETvb4Ac9PVNGI47hsvPwL9sI1k93', name: 'Test twórca' },
    { uid: 'ETvb4Ac9PVNGI47hsvPwL9sI45F3', name: 'Test parapapapa' },
    { uid: 'P8Y4jCnTOsMOz2zNmwrbsJD78i53', name: 'Twórca pierwotny' },
  ],
  user: {},
};

const reducer = ( state = initState, action ) => {
  let index;

  switch ( action.type ) {
    case actionTypes.GET_USER_NAME:
      index = state.users.findIndex(( user ) => user.uid === action.userUID );

      return {
        ...state,
        user: index === -1 ? { obj: 'error' } : state.users[ index ],
      };
    default:
      return state;
  }
};

export default reducer;
