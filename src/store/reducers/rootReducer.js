import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import userReducer from './userReducer';
import formReducer from './formReducer';
import authReducer from './authReducer';
import drawReducer from './drawReducer';
import answersReducer from './answersReducer';

const rootReducer = combineReducers({
  usr: userReducer,
  form: formReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  draw: drawReducer,
  ans: answersReducer,
});

export default rootReducer;
