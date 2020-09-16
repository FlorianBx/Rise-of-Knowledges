import mongoose from 'mongoose';

const Quizz = mongoose.Schema({
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