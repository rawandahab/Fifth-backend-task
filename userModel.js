const mongoose = require('mongoose')
const { type } = require('node:os')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    city: {
        type: String,
        default: "Cairo"
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User