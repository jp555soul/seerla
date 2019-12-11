import { CONSTANTS } from '../../_constants/constants'
import { alertActions } from './alerts'

function getUsers(){
    return  dispatch => {
        dispatch(request());
    	fetch('/api/users',{
            method: 'GET'
        })
    	.then(
            res => {
                res.json()
            })
    	.then(
            users => {
                dispatch(success(users))
            },
            err => {
                console.log('err: ', err);
                dispatch(failure(err));
                dispatch(alertActions.error(err));
            }
    	)
    };

    function request() { 
        console.log('request');
        return { type: CONSTANTS.GET_REQUEST } 
    }
    function success(users) { 
        return { type: CONSTANTS.GET_SUCCESS, users } 
    }
    function failure(error) { 
        return { type: CONSTANTS.GET_FAIL, error } 
    }
}

function deleteUser(id) {
    return dispatch => {
    	fetch(`/api/delete/${id}`,{
    		method: 'DELETE',
            body: JSON.stringify(id)
    	})
        .then(
            res => {
                dispatch({
                    type: CONSTANTS.DELETE_USER,
                    payload: id
                });
                dispatch(alertActions.success('User deleted'));
            }
        )
        .catch(err => {
          dispatch(alertActions.error(err));
        });
    }
}

export const userActions = {
    getUsers,
    deleteUser
}

