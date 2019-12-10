import {USER_FORM} from './constants';

//https://jsonplaceholder.typicode.com/posts
export const userForm = postData => dispatch => {
	return fetch('/api/add/user', {
  		method: 'POST',
  		headers: {
  			'content-type': 'application/json'
  		},
  		body: JSON.stringify(postData)
  	})
		.then(res => res.json())
		.then(userForm => dispatch({
				type: USER_FORM,
				payload: userForm
			})
		)
		.then(userForm => {
			console.log('userForm: ',userForm)
		})
}
