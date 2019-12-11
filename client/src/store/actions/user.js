import { CONSTANTS } from '../../_constants/constants'
import { alertActions } from './alerts'

export const getUsers = () => dispatch => {
	return fetch('/api/users',{
        method: 'GET'
    })
    	.then(res => res.json())
    	.then(users => dispatch({
    		type: CONSTANTS.GET_USERS, 
    		payload: users
    	})
		
    )
    .catch(err => {
        console.log(err)
    })
}

export const deleteUser = id => dispatch => {
	return fetch(`/api/delete/${id}`,{
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
