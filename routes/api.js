const express = require('express');
const cors = require('cors');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/Users');
var crypto = require('crypto');


//API list all users
router.get('/users', (req, res, next) => {
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

	let { 
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
		console.log("form errors:", errors);
		res.sendStatus(502);
		// res.render('',{
		// 	errors,
		// 	firstName,
		// 	lastName,
		// 	userEmail,
		// 	password,
		// 	userName
		// });
	}else{
		console.log("body:", req.body);
		res.sendStatus(200);
		// User.create({
		// 	firstName,
		// 	lastName,
		// 	userEmail,
		// 	password,
		// 	userName
		// })
		// .then(user => res.sendStatus(200))
		// .catch(err => console.log(err));
	}

});

module.exports = router;