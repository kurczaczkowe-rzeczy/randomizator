import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';
import drawReducer from './drawReducer';
import answersReducer from './answersReducer';

const rootReducer = combineReducers({
  usr: userReducer,
  form: formReducer,
  draw: drawReducer,
  ans: answersReducer,
});

export default rootReducer;
