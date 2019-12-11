import { GET_USERS, DELETE_USER } from './constants';

export const getUsers = () => dispatch => {
	return fetch('/api/users')
    	.then(res => res.json())
    	.then(users => dispatch({
    		type: GET_USERS, 
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
    .then(res =>
      dispatch({
        type: DELETE_USER,
        payload: id
      })
    )
    .catch(err => {
      console.log(err)
    });
}
