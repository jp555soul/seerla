import {combineReducers} from 'redux';
import userReducer from './user';
import userFormReducer from './userform';

export default combineReducers({
  users: userReducer,
  userform: userFormReducer
})
