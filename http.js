const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url==='/'){
        res.end("Their is home page");
    }
    if(req.url==='/about'){
        res.end("this is about page")
    }
    // res.write('Welcome to our home page')
    res.end(`
        <h1>Oops</h1>
        <a href="/">go back</a>
    `);  
});

server.listen(5000)

