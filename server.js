const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end("Home page");         
    } 
    if(req.url=== '/about'){
        res.end("about page");
    }
    res.end("Error page");

});

server.listen(5000,()=>{
    console.log("go to [ https://localhost:5000 ]");
    console.log("Server listening on port : 5000 ... ")
})
