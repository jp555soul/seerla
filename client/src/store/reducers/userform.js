import {USER_FORM} from '../actions/constants'

const userFormReducer = (state = [], {type, payload}) => {
    switch (type) {
      case USER_FORM:
        return payload
      default:
        return state
    }
}

export default userFormReducer;
