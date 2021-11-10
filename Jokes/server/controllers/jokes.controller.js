const Joke = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then((allTheJokes) => {
            res.json({ Joke: allTheJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ user: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ user: newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}