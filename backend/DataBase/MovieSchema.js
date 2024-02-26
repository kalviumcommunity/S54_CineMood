const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema(
    {
        Title: String,
        Title_Img: String,
        Rating: Number,
        TrailerURL: String,
        CoverIMG: String,
        Moods: Array,
        Play: String,
        Likes: Number,
        Dislikes: Number,
        plot_summary: String,
        Release_Year: Number,
        Languages: Array,
        CreatedBy:String
    }
)

const Movies = mongoose.model("movies", MovieSchema);

module.exports = Movies