import { CONSTANTS } from '../../_constants/constants'
import { alertActions } from './alerts'
import { history } from '../../_help/history'

export const form = (user) => {
    return dispatch => {

        fetch('/api/add/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            res.clone().json()
        })
        .then(
            user => {
                dispatch({
                    type: CONSTANTS.REG_SUCCESS,
                    payload: user
                });
                history.push('/confirm');
            },
            err => {
                dispatch(alertActions.error(err));
            }
        )
    };

}

export const formData = user =>{
    return dispatch => {
        const formData = {
            type:CONSTANTS.FORM_DATA,
            formData: user
        }
        dispatch(formData);
    }
}
