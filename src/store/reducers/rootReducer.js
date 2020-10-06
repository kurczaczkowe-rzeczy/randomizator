import { combineReducers } from 'redux';
import usersReducer from './userReducer';

const rootReducer = combineReducers({ usr: usersReducer });

export default rootReducer;
