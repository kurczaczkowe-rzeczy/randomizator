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
  dispatch({ type: SHOW_LOADER, payload: { callFrom: 'SIGN_IN' }});
  const firebase = getFirebase();

  firebase.auth()
    .signInWithEmailAndPassword( credentials.email, credentials.password )
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    })
    .finally(() => {
      dispatch({ type: HIDE_LOADER, payload: { callFrom: 'SIGN_IN' }});
    });
};

export const signOut = () => (
  dispatch,
  _,
  { getFirebase },
) => {
  dispatch({ type: SHOW_LOADER, payload: { callFrom: 'SIGN_OUT' }});
  const firebase = getFirebase();

  firebase.auth().signOut()
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .finally(() => {
      dispatch({ type: HIDE_LOADER, payload: { callFrom: 'SIGN_OUT' }});
    }); // ToDo add error catching
};
