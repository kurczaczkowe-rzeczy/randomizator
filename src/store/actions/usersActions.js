import * as actionTypes from 'store/actions';

export const getUserName = ( userUID ) => ({ type: actionTypes.GET_USER_NAME, userUID });
