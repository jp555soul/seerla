import {ADD_USER} from './constants';

export const addUser = postData => dispatch => {
	//https://jsonplaceholder.typicode.com/posts
	// /api/add/user
	fetch('/api/add/user', {
  		method: 'POST',
  		headers: {
  			'content-type': 'application/json'
  		},
  		body: JSON.stringify(postData)
  	})
		.then(res => res.json())
		.then(user => 
			dispatch({
				type:ADD_USER,
				payload: user
			})
		);
};
