import {combineReducers} from 'redux';
import userReducer from './user';
import userFormReducer from './userform';
import {alert} from './alerts'

export default combineReducers({
  users: userReducer,
  userform: userFormReducer,
  alert
})
