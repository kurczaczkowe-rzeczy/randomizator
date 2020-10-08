import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({ usr: userReducer, form: formReducer });

export default rootReducer;
