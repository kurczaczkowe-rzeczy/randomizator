import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import userReducer from './userReducer';
import formReducer from './formReducer';
import formsReducer from './formsReducer';
import answersReducer from './answersReducer';
import drawReducer from './drawReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  usr: userReducer,
  form: formReducer,
  forms: formsReducer,
  ans: answersReducer,
  draw: drawReducer,
});

export default rootReducer;
