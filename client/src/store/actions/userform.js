import {USER_FORM} from './constants'

export const register = user => dispatch => {
    return fetch('/api/add/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(userForm => dispatch({
            type: USER_FORM,
            payload: userForm
        })
    ).catch(err => {
        console.log(err)
    })
}

export const userActions = {
    register
}
