import {GET_USERS} from './constants';

//https://jsonplaceholder.typicode.com/posts
export const getUsers = () => dispatch => {
	return fetch('/api/users')
    	.then(res => res.json())
    	.then(users => dispatch({
    		type: GET_USERS, 
    		payload: users
    	})
		
    )
}
