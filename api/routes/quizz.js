import Quizz from '../modele/Quizz';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

const getQuizz = async (req, res) => {
    let {lang} = req.params
    
    lang = typeof lang === 'undefined' || !['fr', 'en', 'de', 'it', 'nl'].includes(lang) ? 'en' : lang;
    const queryHelper = [
        {difficulty: '0', qty: 8},
        {difficulty: '1', qty: 8},
        {difficulty: '2', qty: 4}
    ];

<<<<<<< HEAD
    const quizz = await queryHelper.map(async (value, index) => {
        let query = {
=======
        let querys = {
>>>>>>> master
            difficulty: value.difficulty,
            lang: lang
        }
<<<<<<< HEAD
        let getQuestion = await Quizz.find(query)
        let getQuestionLength = getQuestion.length;
        let getRandom = getRandomArbitrary(0, getQuestionLength);
        return getRandom > value.qty ? getQuestion.slice(getRandom - value.qty, getRandom):
        getQuestion.slice(getRandom, getRandom + value.qty);
    });
    Promise.all(quizz).then(resolve => {
        return res.status(200).json(resolve.flat())
=======
        const getQuestion = await Quizz.find(querys).limit(value.qty);
        return getQuestion;
    });
    Promise.all(quizz).then(async resolve => {
        return res.status(200).json(resolve.flat());
>>>>>>> master
    })
    .catch(error => { return res.status(500).json({error: 'no quizz available ' + error }) });
}

const postResponse = async (req, res) => {
    const {lang, username, userData} = req.body;
    // id difficulty et result
    

}

module.exports = getQuizz;