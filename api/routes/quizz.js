import Quizz from '../modele/Quizz';

const getQuizz = async (req, res) => {
    let {lang} = req.params
    
    lang = typeof lang === 'undefined' || !['fr', 'en', 'de', 'it', 'nl'].includes(lang) ? 'en' : lang;
    const queryHelper = [
        {difficulty: 'débutant', qty: 8},
        {difficulty: 'confirmé', qty: 8},
        {difficulty: 'expert', qty: 4}
    ];
    const quizz = await queryHelper.map(async value => {

        let querys = {
            difficulty: value.difficulty,
            rand: {$gte: Math.random()},
            lang: lang
        }
        const getQuestion = await Quizz.find(querys).limit(value.qty);
        return getQuestion;
    });
    Promise.all(quizz).then(async resolve => {
        return res.status(200).json(resolve.flat());
    })
    .catch(error => { return res.status(500).json({error: 'no quizz available ' + error }) });
}

const postResponse = async (req, res) => {
    const {lang, username, userData} = req.body;
    // id difficulty et result
    

}

module.exports = getQuizz;