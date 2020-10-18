import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { LOGOUT_SUCCESS } from 'store/actions';

import authReducer from './authReducer';
import userReducer from './userReducer';
import formReducer from './formReducer';
import formsReducer from './formsReducer';
import answersReducer from './answersReducer';
import drawReducer from './drawReducer';

const appReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  usr: userReducer,
  form: formReducer,
  forms: formsReducer,
  ans: answersReducer,
  draw: drawReducer,
});

const rootReducer = ( state, action ) => {
  if ( action.type === LOGOUT_SUCCESS ) {
    state = undefined;
  }

  return appReducer( state, action );
};

export default rootReducer;
