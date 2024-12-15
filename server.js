const express = require("express");
const url=require("url");
const fs=require("fs");
const http = require("http");


var app = express();
app.use(express.static(__dirname+'/'));

app.get('/',function(req,res){
    
    res.sendFile(__dirname + "/index.html")
});

server=http.createServer(app);
server.listen(8080);