import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;
const ScoreBoardSchema = new mongoose.Schema({
    id: {type: ObjectId},
    rank: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    score: {type: Number}
})

module.exports = mongoose.model('scoreboardschema', ScoreBoardSchema);