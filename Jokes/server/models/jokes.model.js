const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
}, { timestamps: true })

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
