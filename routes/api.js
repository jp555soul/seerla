const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require('../config/db')
const User = require('../models/Users')


//API list all users
router.get('/users', (req, res) => {
	User.findAll()
		.then(users =>{
			res.setHeader('Content-Type', 'application/json');
			res.json(users);
			res.status(200).send();
		})
		.catch(err => console.log(err))
});

// Add a user
router.post('/add/user', (req, res) => {
	try{
		const { 
			firstName,
			lastName,
			userEmail,
			password,
			userName
		} = req.body;

		let errors = [];

		if(!firstName){
			errors.push({ these: 'Please enter your first name.'});
		}
		if(!lastName){
			errors.push({ these: 'Please enter your last name.'});
		}
		if(!userEmail){
			errors.push({ these: 'Please enter your email.'});
		}
		if(!password){
			errors.push({ these: 'Please enter a password.'});
		}
		if(!userName){
			errors.push({ these: 'Please enter a username.'});
		}

		if(errors.length > 0){
			res.render('/',{
				errors,
				firstName,
				lastName,
				userEmail,
				password,
				userName
			});
			console.log(errors);
		}else{
			User.create({
				firstName,
				lastName,
				userEmail,
				password,
				userName
			})
			.then(user => res.sendStatus(200))
			.catch(err => console.log(err));
		}


	} catch (e) {
		console.log(e);
		res.status(400).send({});
	}

});

// Delete a user
router.get('/delete/:id', (req, res) => {
	console.log('params:' , req.params);
  	User.destroy(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;