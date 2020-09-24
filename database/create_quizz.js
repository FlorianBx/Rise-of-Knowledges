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
let data60 = require('./Datajson/openquizzdb_102.json');
let data61 = require('./Datajson/openquizzdb_103.json');
let data62 = require('./Datajson/openquizzdb_104.json');
let data63 = require('./Datajson/openquizzdb_107.json');
let data64 = require('./Datajson/openquizzdb_108.json');
let data65 = require('./Datajson/openquizzdb_109.json');
let data66 = require('./Datajson/openquizzdb_11.json');
let data67 = require('./Datajson/openquizzdb_114.json');
let data68 = require('./Datajson/openquizzdb_119.json');
let data69 = require('./Datajson/openquizzdb_12.json');
let data70 = require('./Datajson/openquizzdb_120.json');
let data71 = require('./Datajson/openquizzdb_121.json');
let data72 = require('./Datajson/openquizzdb_123.json');
let data73 = require('./Datajson/openquizzdb_127.json');
let data74 = require('./Datajson/openquizzdb_129.json');
let data75 = require('./Datajson/openquizzdb_130.json');
let data76 = require('./Datajson/openquizzdb_136.json');
let data77 = require('./Datajson/openquizzdb_138.json');
let data78 = require('./Datajson/openquizzdb_139.json');
let data79 = require('./Datajson/openquizzdb_140.json');
let data80 = require('./Datajson/openquizzdb_142.json');
let data81 = require('./Datajson/openquizzdb_144.json');
let data82 = require('./Datajson/openquizzdb_147.json');
let data83 = require('./Datajson/openquizzdb_151.json');
let data84 = require('./Datajson/openquizzdb_158.json');
let data85 = require('./Datajson/openquizzdb_159.json');
let data86 = require('./Datajson/openquizzdb_160.json');
let data87 = require('./Datajson/openquizzdb_176.json');
let data88 = require('./Datajson/openquizzdb_177.json');
let data89 = require('./Datajson/openquizzdb_18.json');
let data90 = require('./Datajson/openquizzdb_186.json');
let data91 = require('./Datajson/openquizzdb_188.json');
let data92 = require('./Datajson/openquizzdb_194.json');
let data93 = require('./Datajson/openquizzdb_195.json');
let data94 = require('./Datajson/openquizzdb_197.json');
let data95 = require('./Datajson/openquizzdb_199.json');
let data96 = require('./Datajson/openquizzdb_200.json');
let data97 = require('./Datajson/openquizzdb_204.json');
let data98 = require('./Datajson/openquizzdb_206.json');
let data99 = require('./Datajson/openquizzdb_208.json');
let data100 = require('./Datajson/openquizzdb_212.json');
let data101 = require('./Datajson/openquizzdb_219.json');
let data102 = require('./Datajson/openquizzdb_223.json');
let data103 = require('./Datajson/openquizzdb_224.json');
let data104 = require('./Datajson/openquizzdb_23.json');
let data105 = require('./Datajson/openquizzdb_232.json');
let data106 = require('./Datajson/openquizzdb_233.json');
let data107 = require('./Datajson/openquizzdb_236.json');
let data108 = require('./Datajson/openquizzdb_238.json');
let data109 = require('./Datajson/openquizzdb_24.json');
let data110 = require('./Datajson/openquizzdb_245.json');
let data111 = require('./Datajson/openquizzdb_25.json');
let data112 = require('./Datajson/openquizzdb_28.json');
let data113 = require('./Datajson/openquizzdb_31.json');
let data114 = require('./Datajson/openquizzdb_35.json');
let data115 = require('./Datajson/openquizzdb_36.json');
let data116 = require('./Datajson/openquizzdb_365.json');
let data117 = require('./Datajson/openquizzdb_37.json');
let data118 = require('./Datajson/openquizzdb_38.json');
let data119 = require('./Datajson/openquizzdb_382.json');
let data120 = require('./Datajson/openquizzdb_383.json');
let data121 = require('./Datajson/openquizzdb_39.json');
let data122 = require('./Datajson/openquizzdb_40.json');
let data123 = require('./Datajson/openquizzdb_405.json');
let data124 = require('./Datajson/openquizzdb_41.json');
let data125 = require('./Datajson/openquizzdb_5.json');
let data126 = require('./Datajson/openquizzdb_54.json');
let data127 = require('./Datajson/openquizzdb_56.json');
let data128 = require('./Datajson/openquizzdb_62.json');
let data129 = require('./Datajson/openquizzdb_65.json');
let data130 = require('./Datajson/openquizzdb_70.json');
let data131 = require('./Datajson/openquizzdb_71.json');
let data132 = require('./Datajson/openquizzdb_73.json');
let data133 = require('./Datajson/openquizzdb_80.json');
let data134 = require('./Datajson/openquizzdb_82.json');
let data135 = require('./Datajson/openquizzdb_85.json');
let data136 = require('./Datajson/openquizzdb_87.json');
let data137 = require('./Datajson/openquizzdb_9.json');
let data138 = require('./Datajson/openquizzdb_91.json');
let data139 = require('./Datajson/openquizzdb_95.json');
let data140 = require('./Datajson/openquizzdb_96.json');
let data141 = require('./Datajson/openquizzdb_97.json');
let data142 = require('./Datajson/openquizzdb_98.json');
let data143 = require('./Datajson/openquizzdb_99.json');
let data144 = require('./Datajson/openquizzdb_67.json');
/*
let data144 = require('');
let data145 = require('');
let data146 = require('');
let data147 = require('');
let data148 = require('');
let data149 = require('');
let data150 = require('');
let data151 = require('');
let data152 = require('');
let data153 = require('');
let data154 = require('');
let data155 = require('');
let data156 = require('');
let data157 = require('');
let data158 = require('');
let data159 = require('');
*/
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
    data52, data53, data54, data55, data56, data57, data58, data59, data60,
    data61, data62, data63, data64, data65, data66, data67, data68, data69,
    data70, data71, data72, data73, data74, data75, data76, data77, data78,
    data79, data80, data81, data82 ,data83, data84, data85, data86, data87,
    data88, data89, data90, data91, data92, data93, data94, data95, data96,
    data97, data98, data99 ,data100, data101, data102, data103, data104, data105,
    data106 ,data107, data108, data109 , data110, data111, data112, data113, data114,
    data115, data116, data117, data118, data119, data120, data121, data122, data123, data124,
    data125, data126, data127, data128, data129, data130, data131, data132, data133, data134,
    data135, data136, data137, data138, data139, data140, data141, data142, data143, data144];
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