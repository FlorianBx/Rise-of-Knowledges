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
let data17 = require('./Datajson/openquizzdb_10.json');
let data18 = require('./Datajson/openquizzdb_116.json');
let data19 = require('./Datajson/openquizzdb_124.json');
let data20 = require('./Datajson/openquizzdb_128.json');
let data21 = require('./Datajson/openquizzdb_145.json');
let data22 = require('./Datajson/openquizzdb_15.json');
let data23 = require('./Datajson/openquizzdb_156.json');
let data24 = require('./Datajson/openquizzdb_157.json');
let data25 = require('./Datajson/openquizzdb_16.json');
let data26 = require('./Datajson/openquizzdb_163.json');
let data27 = require('./Datajson/openquizzdb_173.json');
let data28 = require('./Datajson/openquizzdb_174.json');
let data29 = require('./Datajson/openquizzdb_175.json');
let data30 = require('./Datajson/openquizzdb_183.json');
let data31 = require('./Datajson/openquizzdb_184.json');
let data32 = require('./Datajson/openquizzdb_2.json');
let data33 = require('./Datajson/openquizzdb_214.json');
let data34 = require('./Datajson/openquizzdb_237.json');
let data35 = require('./Datajson/openquizzdb_3.json');
let data36 = require('./Datajson/openquizzdb_33.json');
let data37 = require('./Datajson/openquizzdb_4.json');
let data38 = require('./Datajson/openquizzdb_44.json');
let data39 = require('./Datajson/openquizzdb_47.json');
let data40 = require('./Datajson/openquizzdb_48.json');
let data41 = require('./Datajson/openquizzdb_49.json');
let data42 = require('./Datajson/openquizzdb_50.json');
let data43 = require('./Datajson/openquizzdb_51.json');
let data44 = require('./Datajson/openquizzdb_52.json');
let data45 = require('./Datajson/openquizzdb_59.json');
let data46 = require('./Datajson/openquizzdb_63.json');
let data47 = require('./Datajson/openquizzdb_69.json');
let data48 = require('./Datajson/openquizzdb_86.json');
let data49 = require('./Datajson/openquizzdb_88.json');
let data50 = require('./Datajson/openquizzdb_89.json');
let data51 = require('./Datajson/openquizzdb_93.json');
let data52 = require('./Datajson/openquizzdb_203.json');
let data53 = require('./Datajson/openquizzdb_393.json');
let data54 = require('./Datajson/openquizzdb_221.json');
let data55 = require('./Datajson/openquizzdb_214.json');
let data56 = require('./Datajson/openquizzdb_203.json');
let data57 = require('./Datajson/openquizzdb_117.json');
let data58 = require('./Datajson/openquizzdb_115.json');
let data59 = require('./Datajson/openquizzdb_100.json');






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
    data9, data10, data11, data12, data13, data14, data15, data16,
    data17, data18, data19, data20, data21, data22, data23, data24, data25,
    data26, data27, data28, data29, data30, data31, data31, data32, data33,
    data34, data35, data36, data37, data38, data39, data40, data41, data42,
    data43, data44, data45, data46, data47, data48, data49, data50, data51,
    data52, data53, data54, data55, data56, data57, data58, data59];
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