document.getElementById('addMovie').addEventListener('click', event => {
    event.preventDefault()
    axios.get('/api/movies', {
        title: document.getElementById('title').value
    })
    .then(()) => {
        let movieElem = document.createElement('li')
        movieElem = document.getElementById('title').value
        document.getElementById('movies').append(movieElem)
    }
})

document.addEventListener('click', event => {
    if (event.target.className === 'deleteMovie') {
        axios.delete(`/api/movies/${event.target.dataset.id}`)
            .then(() => {
                event.target.parentNode.remove()
            })
    }
})