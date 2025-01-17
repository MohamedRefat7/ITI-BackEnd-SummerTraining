const express = require('express');
const app = express();
const fs=require('fs');

const movieRouter=require('./routes/movie_route.js');

app.use(express.json());
app.use((req, res, next)=>{
//req.requestTime= new Data().toISOString();
console.log("Hello from middleware");
next();    
}); 

app.use('/api/v1/Movies', movieRouter);
module.exports=app;

