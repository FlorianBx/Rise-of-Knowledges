import ScoreBoard from '../modele/ScoreBoard';
import mongoose from 'mongoose';

const defineScore = (datas) => {
    const score = [];

    datas.map(value => {
        if (value.answer === value.userAnswer) {
            if (value.difficulty === '0') {
                score.push(2);
            }
            return value.difficulty === '1' ? score.push(5) : score.push(15);
        }
    })
    return score !== [] && score.length > 1 ? score.reduce((a, b) => { return a + b}) : 0;
}

const getScore = async (req, res) => {
    const getAllScore = await ScoreBoard.find().sort({score: -1})
console.log(getAllScore) //DEBUG
    return !getAllScore ? res.status(500).json({error: 'cannot get All score did you fetch the table ?'})
    : res.status(200).json(getAllScore);
}

const PostScore = async (req, res) => {
    const {name, datas} = req.body;
console.log(req.body) //DEBUG
    const userScore = defineScore(datas);
    const ObjectId = mongoose.Schema.Types.ObjectId;
    const isAlreadyAdded = await ScoreBoard.findOne({name: name});
    if (!isAlreadyAdded) {
        const addScore = await new ScoreBoard({id: ObjectId, name: name, score: userScore});
        addScore.save()
        .then(resolve => { return res.status(200).json({message: 'users : ' +  name + ' score successfully added ' + resolve})})
        .catch((err) => { return res.status(500).json({error : err})});
    }
    return isAlreadyAdded && isAlreadyAdded.update({score: userScore}, (err, result) => {
        if (err || !result) return res.status(500).json({error: 'cannot update user score'});
        return res.status(200).json({message: 'updating successfully the user score'});
    });
}

module.exports = {getScore, PostScore};
