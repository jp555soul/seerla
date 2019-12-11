import {USER_FORM} from './constants'
import { alertActions } from './alerts'

function register(user) {
    return dispatch => {
        console.log('user: ', user);
        return fetch('/api/add/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(
            res => {
                console.log('res: ', res)
                res.json()
            })
        .then(userForm => dispatch({
                type: USER_FORM,
                payload: userForm
            })
        )
    };

    function request(user) { return { type: USER_FORM.REGISTER_REQUEST, user } }
    function success(user) { return { type: USER_FORM.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: USER_FORM.REGISTER_FAILURE, error } }
}

export const userActions = {
    register
}
