import * as actionTypes from 'store/actions';

export const getUserName = ( id ) =>
  (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    const firestore = getFirestore();

    firestore.collection( 'users' ).doc( id )
      .get()
      .then(( doc ) => {
        if ( doc.exists ) {
          dispatch({ type: actionTypes.GET_USER_NAME, name: doc.data().name });
        } else {
          dispatch({ type: actionTypes.ERROR_USER_DONT_EXIST, errorMsg: 'User don\'t exist' });
        }
      });
  };

