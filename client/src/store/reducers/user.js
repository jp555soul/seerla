import { CONSTANTS } from '../../_constants/constants'


export function users(state = {}, payload){
    switch (payload.type) {
      case CONSTANTS.GET_REQUEST:
        return {
          loading: true
        };
    	case CONSTANTS.GET_SUCCESS:
    		return {
          users: payload
        };
      case CONSTANTS.GET_FAIL:
        return {
          error: payload.error
        };
      case CONSTANTS.DELETE_USER:
        return {
          users: state.users.filter(user => user.id !== payload)
        };
      default:
      	return state
    }
}
