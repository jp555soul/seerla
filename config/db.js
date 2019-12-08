const Sequelize = require('sequelize');

module.exports = new Sequelize('seerla', 'postgres', 'jmpaul', {
  host: 'localhost',
  dialect: 'postgres'
});