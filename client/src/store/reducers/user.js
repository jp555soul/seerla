import { CONSTANTS } from '../../_constants/constants'

const initialState = {
  payload: []
};


export function users(state = [initialState], payload){
    switch (payload.type) {
      case CONSTANTS.GET_REQUEST:
        return {
          loading: true
        };
    	case CONSTANTS.GET_SUCCESS:
    		return payload
      case CONSTANTS.GET_FAIL:
        return {
          error: payload.error
        };
      case CONSTANTS.DELETE_USER:
        return {
          ...state,
          payload: state.users.filter(user => 
            user.id !== payload
              ? { ...user, deleting: true }
              : user
          )
        };
      default:
      	return state
    }
}
