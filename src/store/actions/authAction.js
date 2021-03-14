import {
  HIDE_LOADER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SHOW_LOADER,
} from 'store/actions';

export const signIn = ( credentials ) => (
  dispatch,
  _,
  { getFirebase },
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
  dispatch,
  _,
  { getFirebase },
) => {
  dispatch({ type: SHOW_LOADER });
  const firebase = getFirebase();

  firebase.auth().signOut()
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .finally(() => {
      dispatch({ type: HIDE_LOADER });
    }); // ToDo add error catching
};
