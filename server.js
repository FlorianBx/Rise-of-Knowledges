import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

// setting up morgan for debugin will not be present in production

morgan('dev');

// setting up bodyParser and cookieParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// require the routes

const {login, register} = require('./api/routes/users');

// require dotenv to use env variable

require('dotenv').config();

// require the database config

require('./database/config.js');

// routes

app.post('/login', login);
app.post('/register', register);


app.get('/', (req, res) => {
    // route de test
    console.log(req.cookies)
    res.send('<h1>Welcome</h1>')
})


app.listen(process.env.PORT, () => console.log('serveur is running on port : ' + process.env.PORT));