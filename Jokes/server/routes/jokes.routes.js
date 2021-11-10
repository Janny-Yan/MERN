const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.put('/api/jokes/:id', JokeController.createNewJoke);
    app.post('/api/jokes', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}