import { combineReducers, Reducer } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { LOGOUT_SUCCESS } from 'store/actions';
import { LogoutAction } from 'store/types';

import globalReducer from './globalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import formReducer from './formReducer';
import formsReducer from './formsReducer';
import answersReducer from './answersReducer';
import drawReducer from './drawReducer';

const appReducer = combineReducers({
  global: globalReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  usr: userReducer,
  form: formReducer,
  forms: formsReducer,
  ans: answersReducer,
  draw: drawReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer: Reducer<RootState, LogoutAction> = ( state, action ) => {
  if ( action.type === LOGOUT_SUCCESS ) {
    state = undefined;
  }

  return appReducer( state, action );
};

export default rootReducer;
