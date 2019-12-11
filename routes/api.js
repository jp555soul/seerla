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
	console.log("body: ", req.body);
	res.sendStatus(400).send();



	// try {
	// 	const { 
	// 		firstName,
	// 		lastName,
	// 		userEmail,
	// 		password,
	// 		userName
	// 	} = req.body;

	// 	User.findOrCreate({ 
	// 		where:{
	// 			userEmail
	// 		}, 
	// 		transaction: firstName, lastName, userEmail, password, userName })
	// 		.then(user => res.sendStatus(200).json(req.body))
	// 		.catch(err => console.log(err));

	// 	// let errors = [];

	// 	// if(!firstName){
	// 	// 	errors.push({ these: 'Please enter your first name.'});
	// 	// }
	// 	// if(!lastName){
	// 	// 	errors.push({ these: 'Please enter your last name.'});
	// 	// }
	// 	// if(!userEmail){
	// 	// 	errors.push({ these: 'Please enter your email.'});
	// 	// }
	// 	// if(!password){
	// 	// 	errors.push({ these: 'Please enter a password.'});
	// 	// }
	// 	// if(!userName){
	// 	// 	errors.push({ these: 'Please enter a username.'});
	// 	// }

	// 	// if(errors.length > 0){
	// 	// 	res.render('',{
	// 	// 		errors,
	// 	// 		firstName,
	// 	// 		lastName,
	// 	// 		userEmail,
	// 	// 		password,
	// 	// 		userName
	// 	// 	});
	// 	// }else{
	// 	// 	User.create({
	// 	// 		firstName,
	// 	// 		lastName,
	// 	// 		userEmail,
	// 	// 		password,
	// 	// 		userName
	// 	// 	})
	// 	// 	.then(user => res.sendStatus(200))
	// 	// 	.catch(err => console.log(err));
	// 	// }
	// } catch (e) {
	// 	console.log(e);
	// 	res.status(400).send({});
	// }
});

module.exports = router;