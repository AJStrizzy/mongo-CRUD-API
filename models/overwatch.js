const mongoose = require('mongoose')

const abilitySchema = new mongoose.Schema({
    name: String,
    description: String,
    ultimate: Boolean
})

const characterSchema = new mongoose.Schema({
    name: String,
    type: String,
    abilities: [abilitySchema],
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character