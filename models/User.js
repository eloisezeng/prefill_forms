const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    org: {
        type: String,
        required: true
    }
})

const User = mongoose.model('users', userSchema); // 'users' is the name of the collection

module.exports = User