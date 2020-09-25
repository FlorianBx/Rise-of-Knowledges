import LearderBoard from '../api/modele/Leaderboard';
import mongoose from 'mongoose';

const data = require('./Datajson/learderBoard.json');

const datasToLeaderBoard = (req, res) => {
    let datas = data.data.map(async (value, key) => {
        const addingFakeData = await new LearderBoard({
            id: new mongoose.Types.ObjectId,
            name: value.name,
            score: value.score
        })
        addingFakeData.save()
        return addingFakeData;
    })
    Promise.all(datas).then(resolve => { return res.status(200).json({message: resolve}) })
}

module.exports = datasToLeaderBoard;