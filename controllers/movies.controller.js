const movies = require("../models/movie.model");


const movie_index =  (req,res)=>{
    res.send('get all movies lists')
}

const movie_create = (req,res)=>{
    
    // validate a data is must 
    const movie = new movies({
        title: req.body.title,
        descripation: req.body.desc,
    });
    movie.save()
        .then(result => res.send(result))
        .catch(err => console.log(err.message))

}

const movie_update = (req,res)=>{
    res.send('update a movie')
}

const movie_delete = (req,res)=>{
    res.send('deletea movie in list')
}

module.exports = ({
    movie_index,
    movie_create,
    movie_update,
    movie_delete,
})