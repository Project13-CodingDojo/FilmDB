const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({

    title:{
        type:String,
        required: [true, "Title Name is required"],
        minLength: [3, "Title Name must be at least 3 characters"],
    },

    director:{
        type:String,
        required: [true, "Director Name is required"],
        minLength: [3, "Director Name must be at least 3 characters"],
    },

    genre:{
        type:String,
        required: [false],
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
        required: [false],
    },

    cast:{
        type:String,
        required: [false],
    },

    factoids:{
        type:String,
        required: [false],
    },

    image:{
        type:String,
        required: [false],
    }

},{timestamps:true} );

const Film = mongoose.model('Film', FilmSchema)
module.exports = Film