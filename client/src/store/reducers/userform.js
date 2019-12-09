import {ADD_USER} from '../actions/constants'

const userFormReducer = (state = [], {type, payload}) => {
	console.log("type:" , type);
    switch (type) {
      case ADD_USER:
        return payload
      default:
        return state
    }
}

export default userFormReducer;
