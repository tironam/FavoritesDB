const router = require('express').Router()
const { Movie, Song } = require('../controllers')

const app = express()

router.get('/', (req, res) => {
    res.render('home', {
        name: 'John doe'
    })
})

router.get('/movies', (req, res) => {
    Movie.getMovies(movies => {
        res.render('movies', { movies })
    })
})

router.get('/songs', (req, res) => {
    Song.getSongs(songs => {
        res.render('songs', { songs })
    })
})

module.exports = router