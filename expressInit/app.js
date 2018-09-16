var express = require("express");
var app = express();


//three different routes
//the order of the get requests being defined matter, the one defined before holds better precedence.

app.get("/",function(req,res){
    res.send("Hi there");
});

app.get("/bye",function(req,res){
    res.send("GoodBye");
    console.log("bye request made");
});

app.get("/dog",function(req,res){
   res.send("Meow");
   console.log("dog request made");
});

app.get("*",function(req,res){
    res.send("General page encountered");
    console.log("No context request made");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started");
});

