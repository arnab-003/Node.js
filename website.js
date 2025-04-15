const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 5500;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');

    console.log(req.url)
    if(req.url=='/'){
        res.end('<h1> This is Arnab Deb</h1> <p>This is node js!</p>');
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> This is about Arnab Deb</h1> <p>This is about node js!</p>');
    } 

    else if(req.url=='/hello'){
        res.statusCode=200;
    
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } 
    else{
        //  res.arnab();
        res.statusCode=404;
        res.end('<h1> This is Arnab Deb</h1> <p>This page was not found!</p>');
    }
   
});

server.listen(port,()=>{
    console.log('Server is listeing on port ${port}');
});
