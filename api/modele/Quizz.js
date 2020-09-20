import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;
const Quizz = mongoose.Schema({
    id: {type: ObjectId},
    key: { type: Number },
    lang: { type: String},
    difficulty: { type: String },
    question: { type: String },
    suggestion: { type: [String] },
    answer: { type: String },
    anecdote: { type: String },
    rand: { type: Number }
})

module.exports = mongoose.model('QuizzSchema', Quizz);