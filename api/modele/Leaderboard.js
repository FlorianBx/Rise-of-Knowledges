import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;
const LeaderBoardSchema = new mongoose.Schema({
    id: {type: ObjectId},
    name: {
        type: String,
        unique: true,
        required: true
    },
    score: {type: Number}
})

module.exports = mongoose.model('leaderBoardSchema', LeaderBoardSchema);