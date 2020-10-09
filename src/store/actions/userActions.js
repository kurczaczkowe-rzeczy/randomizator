import * as actionTypes from 'store/actions';

export const getUserName = ( id ) =>
  (
    dispatch, getState, { getFirebase, getFirestore },
  ) => {
    getFirestore()
      .collection( 'users' )
      .doc( id )
      .get()
      .then(( doc ) => {
        if ( doc.exists ) {
          dispatch({ type: actionTypes.GET_USER_NAME, name: doc.data().name });
        } else {
          dispatch({ type: actionTypes.ERROR_USER_DONT_EXIST, errorMsg: 'User don\'t exist' });
        }
      });
  };

