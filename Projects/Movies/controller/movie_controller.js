const Movie=require('../models/movie_model');

exports.getallMovies = async(req,res) =>{
    try{
        const movie= await Movie.find();
        res.status(200).json({
            status: 'success',
            data:{
                movie
            }
        });
    }catch(e){
        const movie=Movie.find();
        res.status(404).json({
            status: 'fail',
            message:e
        });
    }
};
exports.addnewMovie =async (req,res) =>{
    try{
    const added_Movie= await Movie.create(req.body);
    res.status(200).json({
        status: "success",
        data:{
            movie:added_Movie
        }
    })
}catch(e){
    res.status(400).json({
        status: "fail",
        err:{
            e
        }
    })
}
};
exports.getCertainMovie = async (req,res) =>{
    try{
    const movie= await Movie.findbyYear(req.params.year);
    res.status(200).json({
        status: 'success',
        data:{
            movie:movie
        }
    });
}catch(e){
    res.status(404).json({
        status: 'not found',
        e
    });
}
};
exports.updateMovie =async (req,res)=>{
    try{
        const movie= await Movie.findbyYearAndUpdate(req.params.year,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status: 'success',
            data:{
                movie:movie
            }
        });
    }catch(e){
        res.status(404).json({
            status: 'not found',
            e
        });
    }
};
exports.deleteMovie = async (req,res) =>{
    try{
        const movie= await Movie.findbyYearAndDelete(req.params.id)
        res.status(204);
    }catch(e){
        res.status(404).json({
            status: 'not found',
            e
        });
    }
};