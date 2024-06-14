const express = require("express");
const movieRoute = require("./routes/movies.route")



const app = express();


app.get ('/',(req,res)=>{
    res.json({msg:"hello ranjith"})
})

// CURD functionalistyof movies
// using middlewares to import the routes this is ( client -> middleware -> server )

app.use("/movies", movieRoute)




app.listen(3000);