const router = require('express').Router()
const { Movie } = require('../controllers')

// Gets all movies
router.get('/movies', (req, res) => Movie.getMoves(movies => res.json(movies)))

// Gets one movie
router.get('/movies/:id', (req, res) => Movie.getMoviesWhere({ id: req.params.id }, movie => res.json(movie)))

// Add a movie
router.post('/movies', (req, res) => Movie.addMovie(req.body, info => res.json(info)))

// Put one movie
router.put('/movies/:id', (req, res) => Movie.updateMovie(req.body, { id: req.params.id }, info = res.json(info)))

// Delete one movie
router.delete('/movies/:id', (req, res) => Movie.deleteMovie({ id: req.params.id }, info => res.json(info)))

module.exports = router