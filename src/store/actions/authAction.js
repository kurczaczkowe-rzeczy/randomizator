import {
  CLEAR_FORMS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from 'store/actions';

export const signIn = ( credentials ) => (
  dispatch, getState, { getFirebase },
) => {
  const firebase = getFirebase();

  firebase.auth()
    .signInWithEmailAndPassword( credentials.email, credentials.password )
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const signOut = () => (
  dispatch, getState, { getFirebase },
) => {
  const firebase = getFirebase();

  firebase.auth().signOut()
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
      dispatch({ type: CLEAR_FORMS });
    });
};
