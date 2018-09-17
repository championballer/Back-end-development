var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment");  
});

app.get("/speak/:animal",function(req,res){
   
   var sounds = {
     dog : "Woof Woof",
     pig : "Oink",
     cow : "Moo"
   };
   
   var ani = req.params.animal.toLowerCase();
   if(ani in sounds)
   {
       res.send("The "+ani.charAt(0).toUpperCase()+ani.substr(1)+" says \""+sounds[ani]+"\"");
   }
   
   else res.send("Not available");
   
   
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

