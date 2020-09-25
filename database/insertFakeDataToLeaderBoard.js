import ScoreBoard from '../api/modele/ScoreBoard';
import mongoose from 'mongoose';

const data = require('./Datajson/learderBoard.json');

const getScore = (req, res) => {
    let datas = data.data.map(async (value, key) => {
        const addingFakeData = await new ScoreBoard({
            id: new mongoose.Types.ObjectId,
            rank: value.rank,
            name: value.name,
            score: value.score
        })
        addingFakeData.save()
        return addingFakeData;
    })
    Promise.all(datas).then(resolve => { return res.status(200).json({message: resolve}) })
}

module.exports = getScore;