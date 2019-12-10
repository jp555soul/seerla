const Sequelize = require('sequelize');

module.exports = new Sequelize('seerla', 'postgres', 'jmpaul', {
  host: '127.0.0.1',
  dialect: 'postgres'
});