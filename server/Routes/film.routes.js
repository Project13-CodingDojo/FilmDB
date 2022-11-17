const FilmController = require ('../controllers/film.controller')

module.exports =(app) => {
    app.get('/api/allFilms', FilmController.getAllFilms)

    app.get('/api/film/:id', FilmController.getOneFilm)

    app.post('/api/addFilm', FilmController.addFilm)

    app.put('/api/update/:id', FilmController.updateFilm)

    app.delete('/api/delete/:id', FilmController.deleteFilm)

    app.get('/api/Comedy', FilmController.getComedy)

    app.get('/api/Drama', FilmController.getDrama)

    app.get('/api/Horror', FilmController.getHorror)

    app.get('/api/Scifi', FilmController.getSci_fi)

    app.get('/api/Action', FilmController.getAction)

    app.get('/api/Family', FilmController.getFamily)

    app.get('/api/Documentary', FilmController.getDocumentary)

    app.get('/api/Romcom', FilmController.getRomcom)

    app.get('/api/SilentMovie', FilmController.getSilent_Movie)

    app.get('/api/Thriller', FilmController.getThriller)

    app.get('/api/CrimeNoir', FilmController.getCrime_Noir)

    app.get('/api/FrenchCinema', FilmController.getFrench_Cinema)

    app.get('/api/HorrorComedy', FilmController.getHorror_Comedy)

    app.get('/api/Kungfu', FilmController.getKung_fu)

    app.get('/api/Bollywood', FilmController.getBollywood)

    app.get('/api/Anime', FilmController.getAnime)
}