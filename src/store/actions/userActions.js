import { GET_USER_NAME, ERROR_USER_DONT_EXIST } from 'store/actions';

export const getUserName = ( id ) =>
  (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    getFirestore()
      .collection( 'users' )
      .doc( id )
      .get()
      .then(( doc ) => {
        if ( doc.exists ) {
          dispatch({ type: GET_USER_NAME, name: doc.data().name });
        } else {
          dispatch({ type: ERROR_USER_DONT_EXIST, errorMsg: 'User don\'t exist' });
        }
      });
  };

