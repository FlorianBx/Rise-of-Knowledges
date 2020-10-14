import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;
const ScoreBoardSchema = new mongoose.Schema({
    id: {type: ObjectId},
    name: {
        type: String,
        unique: true,
        required: true
    },
    score: {type: Number}
})

module.exports = mongoose.model('scoreboardschema', ScoreBoardSchema);