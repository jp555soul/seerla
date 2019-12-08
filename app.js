const createError = require('http-errors');
const express = require('express');
const react = require('react');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');

const app = express();

//Test connection
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Templating
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('INDEX'));

// Routes
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);