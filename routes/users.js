const express = require('express');
const cors = require('cors');
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

// Form
//router.get('/add', (req, res) => res.render('add'));

module.exports = router;