const express = require('express');
const movieController= require('./../controller/movie_controller.js');

const movieRouter= express.Router();
movieRouter.param('id',(req,res,next,val)=>{
    console.log(`id ${val}`);
    next();
});

movieRouter.route('/').get(movieController.getallMovies).post(movieController.addnewMovie);
movieRouter.route('/:id').get(movieController.getCertainMovie).delete(movieController.deleteMovie).patch(movieController.updateMovie);
module.exports = movieRouter;