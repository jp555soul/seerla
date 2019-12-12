import { CONSTANTS } from '../../_constants/constants'

export function userform(state = {}, payload) {
    switch (payload.type) {
    	case CONSTANTS.REG_REQUEST:
    		return { userform: true };
    	case CONSTANTS.REG_SUCCESS:
        return payload;
      case CONSTANTS.REG_FAIL:
       	return {};
      case CONSTANTS.FORM_DATA:
        console.log('formdata: ',payload)
        return payload
      default:
        return state
    }
}
