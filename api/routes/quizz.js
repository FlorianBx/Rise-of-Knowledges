import Quizz from '../modele/Quizz';

const getQuizz = async (req, res) => {
    let {lang} = req.params
    
    lang = typeof lang === 'undefined' || !['fr', 'en', 'de', 'it', 'nl'].includes(lang) ? 'en' : lang;
    const queryHelper = [
        {difficulty: 'débutant', qty: 8},
        {difficulty: 'confirmé', qty: 8},
        {difficulty: 'expert', qty: 4}
    ];

    const quizz = await queryHelper.map(async (value, index) => {
        let query = {
            difficulty: value.difficulty,
            $or: [{rand: {$lte: Math.random()}}, {rand: {$gte: Math.random()}}],
            lang: lang
        }
        let getQuestion = await Quizz.find(query);
        getQuestion.sort((a, b) => {
            return Math.random() > a.rand ? Math.random() - a.rand : a.rand - b.rand;
        })

        let getQuestions = index < 2 ? getQuestion.slice(Math.floor(Math.random(getQuestion[0].key) + 1),
            Math.floor(Math.random(getQuestion[0].key) + 1) + 8) :
            getQuestion.slice(Math.floor(Math.random(getQuestion[0].key) + 1), Math.floor(Math.random(getQuestion[0].key) + 1) + 4)
        return getQuestions
    });
    Promise.all(quizz).then(resolve => {
        return res.status(200).json(resolve.flat())
    })
    .catch(error => { return res.status(500).json({error: 'no quizz available ' + error }) });
}

const postResponse = async (req, res) => {
    const {lang, username, userData} = req.body;
    // id difficulty et result
    

}

module.exports = getQuizz;