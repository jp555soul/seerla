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
            console.log('res: ', res.clone().json() )
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
                console.log('line 31: ', err);
                dispatch(failure(err));
                dispatch(alertActions.error(err));
            }
        )
    };

    function request(user) { 
        console.log("line 39: ", user)
        return { type: CONSTANTS.REG_REQUEST, user } 
    }
    function success(user) { 
        console.log("line 43: ", user)
        return { type: CONSTANTS.REG_SUCCESS, user } 
    }
    function failure(error) { 
        console.log("line 47: ", error)
        return { type: CONSTANTS.REG_FAIL, error } 
    }
}

export const userFormActions = {
    form
}
