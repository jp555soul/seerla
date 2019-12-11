import { CONSTANTS } from '../../_constants/constants'

const initialState = {
  payload: []
};


const userReducer = (state = [initialState], {type, payload}) => {
    switch (type) {
    	case CONSTANTS.GET_USERS:
    		return payload
    	case CONSTANTS.DELETE_USER:
        return {
          users: state.users.filter(user => user.id !== payload)
        };
      default:
      	return state
    }
}

export default userReducer;
