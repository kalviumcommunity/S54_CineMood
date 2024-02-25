const express = require("express")
const router = express.Router()

const MovieValidation = require("../handlers/MovieValidation")

const validateMovie = (req, res, next) => {
    let { error } = MovieValidation.validate(req.body);
    if (error) {
        res.status(404).send(error.details[0].message);
    } else {
        next();
    }
};

const { createMovie, readMovie, updateMovie, deleteMovie } = require("../handlers/MovieHandler")
router.post('/', validateMovie, createMovie);
router.get('/', readMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;