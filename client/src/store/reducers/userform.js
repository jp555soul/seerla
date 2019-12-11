import { CONSTANTS } from '../../_constants/constants'

export function userform(state = {}, payload) {
    switch (payload.type) {
    	case CONSTANTS.REG_REQUEST:
    		return { userform: true };
    	case CONSTANTS.REG_SUCCESS:
        	return {};
      case CONSTANTS.REG_FAIL:
       		return {};
      	default:
        	return state
    }
}

