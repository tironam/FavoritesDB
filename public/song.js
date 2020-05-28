document.getElementById('addSong').addEventListener('click', event => {
    event.preventDefault()
    axios.get('/api/songs', {
        title: document.getElementById('title').value
        artist: document.getElementById('artist').value
    })
        .then(()) => {
        let songElem = document.createElement('li')
        songElem = `${document.getElementById('title').value} by ${document.getElementById('artist').value}`}
        document.getElementById('movies').append(movieElem)
    }
})

document.addEventListener('click', event => {
    if (event.target.className === 'deleteSong') {
        
    }
})