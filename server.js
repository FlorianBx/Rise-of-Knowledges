import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// setting up morgan for debuging will not be present in production

const app = express();


// setting up morgan for debuging will not be present in production

morgan('dev');

// setting up bodyParser and cookieParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// require the routes


import {login, register} from './api/routes/users';
import getAllData from './database/create_quizz';
import getAllScore from './database/insertFakeDataToLeaderBoard';
import getQuizz from './api/routes/quizz';
import {getScore, postAnswers} from './api/routes/scoreBoard';

// require dotenv to use env variable

require('dotenv').config();

// require the database config

require('./database/config.js');

// routes

app.post('/login', login);
app.post('/register', register);
app.post('/postAnswers', postAnswers)
//getting data
app.get('/getAllData', getAllData);
app.get('/getAllScore', getAllScore)

app.get('/getQuizz/:lang', getQuizz);
app.get('/getScore', getScore);

app.get('/', (req, res) => {
    // route de test
    console.log(req.cookies)
    res.send('<h1>Welcome</h1>')
})


app.listen(process.env.PORT, () => console.log('serveur is running on port : ' + process.env.PORT));

module.exports = app;
