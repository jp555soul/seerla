import { GET_USERS, DELETE_USER} from '../actions/constants'

const userReducer = (state = [], {type, payload}) => {
	console.log('state:' , state)
    switch (type) {
      case GET_USERS:
        return payload
      case DELETE_USER:
      console.log(payload)
      	return {
        	...state,
        	users: state.users.filter(user => user.id !== payload)
      	}
      default:
        return state
    }
}

export default userReducer;
