const express = require('express')
const { join } = require('path')

const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs'}))
app.set('view engine', '.hbs')
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// app.get('/', (req, res) => {
//     res.render('home', {
//         name: 'John doe'
//     })
// })

// app.get('/movies', (req, res) => {
//     res.render('movies')
// })

// app.get('/songs', (req, res) => {
//     res.render('songs')
// })

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))