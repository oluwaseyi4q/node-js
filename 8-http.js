const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        req.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        req.end('Here is our short history')
    }
     res.end (`
     <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for </p>
        <a href="/">back home</a> 
        `)
    
})

server.listen(5000)