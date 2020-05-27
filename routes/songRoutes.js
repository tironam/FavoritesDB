const router = require('express').Router()
const { Song } = require('../controllers')

// Gets all songs
router.get('/songs', (req, res) => Song.getSongs(songs => res.json(songs)))

// Gets one song
router.get('/songs/:id', (req, res) => Song.getSongsWhere({ id: req.params.id }, song => res.json(song)))

// Add a song
router.post('/songs', (req, res) => Song.addSong(req.body, info => res.json(info)))

// Put one Song
router.put('/songs/:id', (req, res) => Song.updateSong(req.body, { id: req.params.id }, info = res.json(info)))

// Delete one Song
router.delete('/songs/:id', (req, res) => Song.deleteSong({ id: req.params.id }, info => res.json(info)))

module.exports = router