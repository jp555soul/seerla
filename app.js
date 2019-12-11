const createError = require('http-errors');
const helmet = require('helmet')
const cors = require('cors');
const express = require('express');
const react = require('react');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');

const app = express();

app.use(helmet())
app.use(cors());

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
app.use(bodyParser.json({limit: '50mb'}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/users'));
app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);