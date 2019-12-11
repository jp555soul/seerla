import { USER_FORM } from '../actions/constants'

const userFormReducer = (state = [], {type, payload}) => {
    switch (type) {
    	case USER_FORM.REGISTER_REQUEST:
    		return { registering: true };
    	case USER_FORM.SUCCESS:
        	return payload
      	default:
        	return state
    }
}

export default userFormReducer;
