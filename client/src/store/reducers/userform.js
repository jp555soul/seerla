import { CONSTANTS } from '../../_constants/constants'

const userFormReducer = (state = [], {type, payload}) => {
    switch (type) {
    	case CONSTANTS.REG_REQUEST:
    		console.log('payload - form req:   ', payload)
    		return { users: true };
    	case CONSTANTS.REG_SUCCESS:
    		console.log('payload - form yay: ', payload)
        	return payload
       	case CONSTANTS.REG_FAIL:
    		console.log('payload - form fail: ', payload)
       		return {};
      	default:
        	return state
    }
}

export default userFormReducer;
