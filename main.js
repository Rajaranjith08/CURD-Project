const express = require("express");

const app = express();


app.get('/',(req,res)=>{
    res.json({msg:'hello student'})
});

// CURD functionalistyof movies

// R - for reading
app.get('/movies',(req,res)=>{

});

// C - for creating
app.post('/movies',(req,res)=>{

});

// U - for updating movie
app.put('/movies/:id',(req,res)=>{

});

// D - for deleting movie
app.delete('/movies:id',(req,res)=>{

})


app.listen(3000);