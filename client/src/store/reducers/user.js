import { CONSTANTS } from '../../_constants/constants'

const initialState = {
  payload: []
};


const userReducer = (state = [initialState], {type, payload}) => {
    switch (type) {
    	case CONSTANTS.GET_USERS:
        console.log('payload - get: ', payload)
    		return payload
    	case CONSTANTS.DELETE_USER:
        console.log('payload - del: ', payload)
        return {
          users: state.users.filter(user => user.id !== payload)
        };
      default:
      	return state
    }
}

export default userReducer;
