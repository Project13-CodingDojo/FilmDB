const FilmController = require ('../controllers/film.controller')

module.exports =(app) => {
    app.get('/api/allFilms', FilmController.getAllFilms)

    app.get('/api/Film/:id', FilmController.getOneFilm)

    app.post('/api/addFilm', FilmController.addFilm)

    app.put('/api/update/:id', FilmController.updateFilm)

    app.delete('/api/delete/:id', FilmController.deleteFilm)

}