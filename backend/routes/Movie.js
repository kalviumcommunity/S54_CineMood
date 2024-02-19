const express = require("express")
const router = express.Router()

const { createMovie, readMovie, updateMovie, deleteMovie } = require("../handlers/MovieHandler")
router.post('/', createMovie);
router.get('/', readMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);



module.exports = router;