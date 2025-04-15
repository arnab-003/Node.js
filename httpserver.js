const http = require('http');

const port = process.env.PORT || 5500;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1> This is Arnab Deb</h1> <p>This is node js!</p>');
});

server.listen(port,()=>{
    console.log('Server is listeing on port ${port}');
});
