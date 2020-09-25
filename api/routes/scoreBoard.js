import ScoreBoard from '../modele/ScoreBoard';

const getScoreBoard = async (req, res) => {
    const getAllScore = await ScoreBoard.find().sort({score: -1})
    return !getAllScore ? res.status(500).json({error: 'cannot get All score did you fetch the table ?'})
    : res.status(200).json(getAllScore);
}

module.exports = getScoreBoard;