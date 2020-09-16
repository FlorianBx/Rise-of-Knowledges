import Quizz from '../modele/Quizz';

const getQuizz = async (req, res) => {
    const {lang} = req.params;

    const queryHelper = [
        {difficulty: 'débutant', qty: 8},
        {difficulty: 'confirmé', qty: 8},
        {difficulty: 'expert', qty: 4}
    ];
    const quizz = await queryHelper.map(async value => {

        let query = {
            difficulty: value.difficulty,
            rand: {$gte: Math.random()},
            lang: lang
        }
        const getQuestion = await Quizz.find(query).limit(value.qty)
        return getQuestion;
    });
    Promise.all(quizz).then(resolve => {
        res.status(200).json(resolve.flat())
    })
    .catch(error => { return res.status(500).json({error: 'no quizz available ' + error }) });
}

module.exports = getQuizz;