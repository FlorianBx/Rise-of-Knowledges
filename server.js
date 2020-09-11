const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// setting up morgan for debuggin will not be present in production

morgan('dev');

// setting up bodyParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// require the routes

const users = require('./api/routes/users');

// require dotenv to use env variable

require('dotenv').config();

// require the database config

require('./database/config.js');

// routes

app.use('/', users);
app.get('/', (req, res) => res.send('<h1>Welcome</h1>'))


app.listen(process.env.PORT, () => console.log('serveur is running on port : ' + process.env.PORT));