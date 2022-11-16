const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({

    title:{
        type:String,
    },

    director:{
        type:String,
    },

    genre:{
        type:String,
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Action',
            'Family',
            'Documentary',
            'Romcom',
            'Silent Movie',
            'Thriller',
            'Crime Noir',
            'French Cinema',
            'Horror/Comedy',
            'Kung-fu',
            'Bollywood',
            'Anime'
        ],
    },

    yearReleased:{
        type:Number,
    },

    cast:{
        type:String,
    },

    factoids:{
        type:String,
    },

    image:{
        type:String,
    }

},{timestamps:true} )

const Film = mongoose.model('Film', FilmSchema)
module.exports = Film