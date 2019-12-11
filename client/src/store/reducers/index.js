import {combineReducers} from 'redux';
import {users} from './user';
import {userform} from './userform';
import {alert} from './alerts'

export default combineReducers({
  users,
  userform,
  alert
})
