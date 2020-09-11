const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 8
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
})

module.exports = mongoose.model('UserSchema', Users);