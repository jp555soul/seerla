const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/Users');
var crypto = require('crypto');

// List all users
router.get('/', (req, res) => 
	User.findAll()
		.then(users => {
			res.render('users', {
				users
			});
			res.sendStatus(200);
		})
		.catch(err => console.log(err)));

// Add a user
router.get('/add', (req, res) => {
	const data ={
		firstName: 'Steph',
		lastName: 'Wana',
		userEmail: 'steph1@email.com',
		password: 'pass',
		userName: 'stephwannabobama'
	}

	let { 
		firstName,
		lastName,
		userEmail,
		password,
		userName
	} = data;

	// Insert
	User.create({
		firstName,
		lastName,
		userEmail,
		password,
		userName
	})
	.then(user => res.redirect('/users/'))
	.catch(err => console.log(err));
});

module.exports = router;