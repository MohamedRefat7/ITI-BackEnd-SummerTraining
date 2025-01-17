const mongoose=require("mongoose");


const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'you must enter name '],
        unique:true
    },
    year:Number
});
const movie= mongoose.model('Movie',movieSchema);
module.exports=movie;