import { combineReducers, Reducer } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { CLEAR_DRAW_RESULT, LOGOUT_SUCCESS } from 'store/actions';
import { IAction, LogoutAction } from 'store/types';

import globalReducer from './globalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import formReducer from './formReducer';
import formsReducer from './formsReducer';
import answersReducer from './answersReducer';
import drawReducer from './drawReducer';
import answersManagerReducer from './answersManagerReducer';

const appReducer = combineReducers({
  global: globalReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  usr: userReducer,
  form: formReducer,
  forms: formsReducer,
  ans: answersReducer,
  answersManager: answersManagerReducer,
  draw: drawReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer: Reducer<RootState, LogoutAction | IAction< typeof CLEAR_DRAW_RESULT >> = ( state, action ) => {
  if ( action.type === LOGOUT_SUCCESS ) {
    state = undefined;
  }

  if ( action.type === CLEAR_DRAW_RESULT && state ) {
    state = {
      ...state,
      firestore: {
        ...state.firestore,
        ordered: {
          ...state.firestore.ordered,
          answers: undefined,
        },
        data: {
          ...state.firestore.data,
          answers: undefined,
        },
      },
    };
  }

  return appReducer( state, action );
};

export default rootReducer;
