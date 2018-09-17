var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("viewengine","ejs");

app.get("/",function(req,res){
    res.render("hello.ejs");
})

app.get("/lover/:thing",function(req,res){
   var tvar = req.params.thing;
   res.render("love.ejs",{thingVar:tvar});
});

app.get("/posts",function(req,res){
   var posts = [
       {title: "Post 1", author:"Sussy"},
       {title: "Post 2", author:"Harry"},
       {title: "Post 3", author:"Bob"}
       ]
       
    res.render("posts.ejs",{posts:posts});
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server Started"); 
});