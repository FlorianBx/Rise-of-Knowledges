import ScoreBoard from '../modele/ScoreBoard';
import mongoose from 'mongoose';

const getScore = async (req, res) => {
    const getAllScore = await ScoreBoard.find().sort({score: -1})
    return !getAllScore ? res.status(500).json({error: 'cannot get All score did you fetch the table ?'})
    : res.status(200).json(getAllScore);
}

const postScore = async (req, res) => {
    const finalScore = [];
    const {name, score} = req.body;
    const getAllScore = await ScoreBoard.find().sort({score: -1});
    let alreadyAdded = false;
    getAllScore.map((value, index) => {
        if(score > value.score && alreadyAdded === false) {
            alreadyAdded = true;
            finalScore.push({id: new mongoose.Types.ObjectId, rank: index, name: name, score: score});
        }
        finalScore.push(value);
    })
    return res.status(200).json(finalScore);
}

module.exports = {getScore, postScore};