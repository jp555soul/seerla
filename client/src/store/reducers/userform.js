import { CONSTANTS } from '../../_constants/constants'

const userFormReducer = (state = [], {type, payload}) => {
    switch (type) {
    	case CONSTANTS.REG_REQUEST:
    		return { userform: true };
    	case CONSTANTS.REG_SUCCESS:
        	return payload
       	case CONSTANTS.REG_FAIL:
       		return {};
      	default:
        	return state
    }
}

export default userFormReducer;
