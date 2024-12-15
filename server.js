const http = require("http");
const url=require("url");
const fs=require("fs");

const server = http.createServer((req, res) => {
    let nopath = 'index.html';
    fs.readFile(nopath, (err , html) => {
      
        res.end(html);

    });

  
});

const port = 3000;

server.listen(port);