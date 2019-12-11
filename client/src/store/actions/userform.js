import { CONSTANTS } from '../../_constants/constants'
import { alertActions } from './alerts';
import { history } from '../../_help/history'

function register(user) {
    return dispatch => {
        dispatch(request(user));
        fetch('/api/add/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(
            userForm => {
                dispatch(success());
                dispatch({
                    type: CONSTANTS.USER_FORM,
                    payload: userForm
                });
                history.push('/confirm');
                dispatch(alertActions.success('Signed up'));
            },
            err => {
                console.log('err: ', err);
                dispatch(failure(err));
                dispatch(alertActions.error(err));
            }
        )
    };

    function request(user) { return { type: CONSTANTS.REG_REQUEST, user } }
    function success(user) { return { type: CONSTANTS.REG_SUCCESS, user } }
    function failure(error) { return { type: CONSTANTS.REG_FAIL, error } }
}

export const userActions = {
    register
}
