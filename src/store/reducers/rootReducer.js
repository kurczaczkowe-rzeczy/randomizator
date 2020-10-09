import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import userReducer from './userReducer';
import formReducer from './formReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  usr: userReducer,
  form: formReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
});

export default rootReducer;
