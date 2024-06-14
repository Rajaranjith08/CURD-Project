const express = require("express");
const mongoose = require("mongoose")
const movieRoute = require("./routes/movies.route");
const dotenv = require("dotenv")


// express app
const app = express();

// config the env file to reflect your server
dotenv.config()

//connecting to mongodb and install ( npm install dotenv)
const dbURI = process.env.MongodbUrl
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




