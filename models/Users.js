const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
	firstName: {
		type:Sequelize.STRING
	},
	lastName: {
		type:Sequelize.STRING
	},
	userEmail: {
		type:Sequelize.STRING
	},
	password: {
		type:Sequelize.STRING
	},
	userName: {
		type:Sequelize.STRING
	}
})

module.exports = User;