const Film = require ('../models/film.model')

module.exports = {
    getAllFilms:(req,res)=>{
        Film.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getOneFilm:(req,res)=>{
        Film.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    addFilm:(req,res)=>{
        Film.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    updateFilm:(req,res)=>{
        Film.updateOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    deleteFilm:(req,res)=>{
        Film.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    }
}