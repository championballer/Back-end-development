var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.render("hello.ejs");
})

app.get("/lover/:thing",function(req,res){
   var tvar = req.params.thing;
   res.render("love.ejs",{thingVar:tvar});
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server Started"); 
});