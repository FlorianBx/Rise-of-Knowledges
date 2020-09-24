//Parsing all json file to create a mongo schema
// require Quizz Schemas
import mongoose from 'mongoose';
import Quizz from '../api/modele/Quizz';

// getting all datas
let data1 = require('./Datajson/openquizzdb_111.json');
let data2 = require('./Datajson/openquizzdb_154.json');
let data3 = require('./Datajson/openquizzdb_155.json');
let data4 = require('./Datajson/openquizzdb_161.json');
let data5 = require('./Datajson/openquizzdb_165.json');
let data6 = require('./Datajson/openquizzdb_187.json');
let data7 = require('./Datajson/openquizzdb_190.json');
let data8 = require('./Datajson/openquizzdb_79.json');
let data9 = require('./Datajson/openquizzdb_113.json');
let data10 = require('./Datajson/openquizzdb_118.json');
let data11 = require('./Datajson/openquizzdb_182.json');
let data12 = require('./Datajson/openquizzdb_179.json');
let data13 = require('./Datajson/openquizzdb_164.json');
let data14 = require('./Datajson/openquizzdb_132.json');
let data15 = require('./Datajson/openquizzdb_26.json');
let data16 = require('./Datajson/openquizzdb_182.json');
 // getting all lang :

import fr from './lang/fr'
import en from './lang/en'
import es from './lang/es'
import de from './lang/de'
import it from './lang/it'
import nl from './lang/nl'

// insert all data

let insertMany = (path, lang, difficulty) => {
    return path.map(async (value, index) => {
        let {question, propositions, réponse, anecdote} = path[index];
        const quizz = new Quizz({
            id: new mongoose.Types.ObjectId,
            key: index,
            lang: lang,
            difficulty: difficulty,
            question: question,
            suggestion: propositions,
            answer: réponse,
            anecdote: anecdote,
            rand: Math.random()
        })
        await quizz.save()
        .then(resolve => { console.log(resolve); })
        .catch(error => { console.log(error); });
    }) 
}

// parsing all data

const getAllData = async (req, res, next) => {
    const datas = [data1, data2, data3, data4, data5, data6, data7, data8,
    data9, data10, data11, data12, data13, data14, data15, data16];
    await datas.map(val => {
        fr(val, insertMany);
        en(val, insertMany);
        de(val, insertMany);
        es(val, insertMany);
        it(val, insertMany);
        nl(val, insertMany);
    });

    return res.status(200).json({message: 'quizz table successfully created'});
}

module.exports = getAllData;