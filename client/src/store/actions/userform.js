import { CONSTANTS } from '../../_constants/constants'
import { alertActions } from './alerts'
import { history } from '../../_help/history'

function form(user) {
    return dispatch => {
        console.log('action - reg:', user)

        dispatch(request(user));
        fetch('/api/add/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            return res.clone().json()
        })
        .then(
            user => {
                console.log("line 17: ", user)
                dispatch(success());
                dispatch({
                    type: CONSTANTS.USER_FORM,
                    payload: user
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
    function success(user) { 
        console.log("line 39: ", user)
        return { type: CONSTANTS.REG_SUCCESS, user } 
    }
    function failure(error) { return { type: CONSTANTS.REG_FAIL, error } }
}

export const userActions = {
    form
}
