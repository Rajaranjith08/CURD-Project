const express = require("express");
const mongoose = require("mongoose")
const movieRoute = require("./routes/movies.route");

// express app
const app = express();

//connecting to mongodb 
const dbURI =  `mongodb+srv://rajaranjithmovieProject:1234567890@firstprojectnodejs.yy4bi8x.mongodb.net/movieAPI-project?retryWrites=true&w=majority&appName=firstProjectNodeJS`
mongoose.connect(dbURI)
    .then( result => {
        app.listen(3000);
        console.log("listening for request from 3000")} )
    .catch(err => console.log(err.message))


app.get ('/',(req,res)=>{
    res.json({msg:"hello ranjith"})
})

// CURD functionalistyof movies
// using middlewares to import the routes this is ( client -> middleware -> server )

app.use("/movies", movieRoute)




