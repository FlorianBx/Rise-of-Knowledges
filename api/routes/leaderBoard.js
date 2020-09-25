import LeaderBoard from '../modele/Leaderboard';

const getLeaderBoard = async (req, res) => {
    const getAllScore = await LeaderBoard.find().sort({score: -1})
    return !getAllScore ? res.status(500).json({error: 'cannot get All score did you fetch the table ?'})
    : res.status(200).json(getAllScore);
}

module.exports = getLeaderBoard;