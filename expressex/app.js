var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment");  
});

app.get("/speak/:animal",function(req,res){
   var an = req.params.animal;
   if(an=="pig")
   {
       res.send("The pig says 'Oink'");
   }
   
   else if(an=="cow")
   {
       res.send("The cow says 'Moo'");
   }
   
   else if(an=="dog")
   {
       res.send("The dog says 'Woof Woof'");
   }
});

app.get("/repeat/:key/:times",function(req,res){
   var toRepeat = req.params.key;
   var iter = Number(req.params.times);
   var str = "";
   for(var i=0;i<iter;i++)
   {
       str+=toRepeat;
       str+=" ";
   }
   
   res.send(str);
});

app.get("*",function(req,res){
    res.send("Sorry, page not found");    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started");
});

