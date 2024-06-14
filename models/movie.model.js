
const mongoose = require("mongoose");

const Schema = mongoose.Schema

//create a schema
const movieList = new Schema ({
    title:{type:String, reqiured:true},
    descripation: {type:String , required:true}
},{timestamp:true});


//create your model
const movies = mongoose.model("movie",movieList);

module.exports = movies;