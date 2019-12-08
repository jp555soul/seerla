import {GET_USERS} from './constants';

export const getUsers = () => dispatch => {
	//https://jsonplaceholder.typicode.com/posts
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(users => dispatch({
    	type: GET_USERS, 
    	payload: users
    }))
}
