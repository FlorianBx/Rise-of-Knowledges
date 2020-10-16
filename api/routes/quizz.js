import Quizz from '../modele/Quizz';

const getRandomArbitrary = (min, max) => {
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

    const quizz = await queryHelper.map(async (value, index) => {
        let query = {
            difficulty: value.difficulty,
            rand: {$gte : Math.random()},
            lang: lang
        }
        let getQuestionRandomlyOne = await Quizz.find(query);
        let getQuestionLength = getQuestionRandomlyOne.length;
        let getRandom = getRandomArbitrary(0, getQuestionLength);
        return getRandom >= value.qty ? getQuestionRandomlyOne.slice(getRandom - value.qty, getRandom):
        getQuestionRandomlyOne.slice(getRandom, getRandom + value.qty);
    });
    Promise.all(quizz).then(async resolve => {
        return res.status(200).json(resolve.flat());
    })
    .catch(error => { return res.status(500).json({error: 'no quizz available ' + error }) });
}

module.exports = getQuizz;