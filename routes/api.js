const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/Users');
var crypto = require('crypto');


//API list all users
router.get('/users', (req, res) => {
	User.findAll()
		.then(users =>{
			res.setHeader('Content-Type', 'application/json');
			res.json(users);
			res.status(200).send();
		})
		.catch(err => console.log(err));
});

module.exports = router;