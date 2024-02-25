const joi = require("joi")

const validateMovie = joi.object({
    Title: joi.string().required(),
    Title_Img: joi.string(),
    Rating: joi.number().required(),
    TrailerURL: joi.string().required(),
    CoverIMG: joi.string().required(),
    Moods: joi.array().required(),
    Play: joi.string().required(),
    plot_summary: joi.string().required(),
    Release_Year: joi.number().required(),
    Languages: joi.array().required()
})

module.exports = validateMovie