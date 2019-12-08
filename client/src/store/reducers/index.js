import {combineReducers} from 'redux';
import userReducer from './user';
import userFormReducer from './user';

export default combineReducers({
  users: userReducer,
  userform: userFormReducer
})
