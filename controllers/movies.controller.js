

const movie_index =  (req,res)=>{
    res.send('get all movies lists')
}

const movie_create = (req,res)=>{
    res.send('create a movie')
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