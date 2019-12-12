import { CONSTANTS } from '../../_constants/constants'
import { alertActions } from './alerts'

export const getUsers = () => dispatch => {
    return  fetch('/api/users')
        .then(
            res => {
                return res.clone().json()
            })
        .then(users => {
            dispatch({
                type: CONSTANTS.GET_SUCCESS, 
                users
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const deleteUser = id => dispatch => {
    return fetch(`/api/delete/${id}`,{
    		method: 'DELETE',
            body: id
    	})
        .then(
            user => {
                dispatch({
                    type: CONSTANTS.DELETE_USER,
                    id
                });
                dispatch(alertActions.success('User deleted'));
            },
            err => {
                dispatch(alertActions.error(err));
            }
        );
}

