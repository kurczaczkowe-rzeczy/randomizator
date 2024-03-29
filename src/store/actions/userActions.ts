import { ThunkAction } from 'redux-thunk';

import { PAGES, USER_ROLES } from 'constans';

import {
  GET_CREATOR_NAME,
  ERROR_USER_DONT_EXIST,
  GET_CURRENT_USER_ROLE,
} from 'store/actions';
import { hideLoader } from 'store/actions/globalActions';
import { IRootState, UserAction } from 'store/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UserThunkAction = ThunkAction<void, IRootState, any, UserAction | any>;

export const getCreatorName = ( id: string ): UserThunkAction =>
  async (
    dispatch,
    _,
    { getFirestore },
  ) => {
    try {
      const doc = await getFirestore()
        .collection( 'users' )
        .doc( id )
        .get();

      if ( doc.exists ) {
        dispatch({ type: GET_CREATOR_NAME, payload: { name: doc.data().name }});
      } else {
        dispatch({ type: ERROR_USER_DONT_EXIST, payload: { errorMsg: 'User don\'t exist' }});
      }
    } catch ( error: unknown ) {
      console.error( error ); // ToDo: issue #172
    }
  };

export const getCurrentUserRole = (): UserThunkAction => async (
  dispatch,
  getState,
  { getFirestore },
) => {
  const {
    firebase: { auth: { isEmpty, uid }},
    usr: { currentUserRole },
  } = getState();

  if ( isEmpty ) {
    dispatch({ type: GET_CURRENT_USER_ROLE, payload: { currentUserRole: USER_ROLES.GUEST }});
    dispatch( hideLoader( PAGES.HOME ));

    return;
  }

  try {
    const doc = await getFirestore()
      .collection( 'users' )
      .doc( uid )
      .get();

    if ( doc.exists && currentUserRole === doc.data().role ) {
      dispatch( hideLoader( PAGES.HOME ));

      return;
    }

    if ( doc.exists ) {
      dispatch({ type: GET_CURRENT_USER_ROLE, payload: { currentUserRole: doc.data().role }});

      return;
    }

    dispatch({ type: ERROR_USER_DONT_EXIST, payload: { errorMsg: 'User don\'t exist' }});
  } catch ( error: unknown ) {
    console.error( error ); // ToDo: issue #172
  } finally {
    dispatch( hideLoader( PAGES.HOME ));
  }
};
