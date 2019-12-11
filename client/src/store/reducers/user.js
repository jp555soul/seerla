import { GET_USERS, DELETE_USER } from '../actions/constants'

const initialState = {
  payload: []
};


const userReducer = (state = [initialState], {type, payload}) => {
    switch (type) {
    	case GET_USERS:
    		return payload
    	case DELETE_USER:
        return {
          ...state,
          payload: state.users.filter(user => user.id !== payload)
        };
      default:
      	return state
    }
}

export default userReducer;
