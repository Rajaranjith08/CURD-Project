const express = require("express");
const moviesController = require("../controllers/movies.controller");


const router = express.Router()

// R - for reading
router.get('/', moviesController.movie_index);

// C - for creating
router.post('/', moviesController.movie_create);

// U - for updating movie
router.put('/:id', moviesController.movie_update );

// D - for deleting movie
router.delete(':id', moviesController.movie_delete );


module.exports = router