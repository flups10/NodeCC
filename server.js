const http = require('http')
const fs = require('fs');
const { defaultMaxListeners } = require('events');

const server = http.createServer((req,res) => {
    
    res.setHeader('Content-Type', 'text/html')

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // Redirect about-me to about
            res.statusCode = 301;
            res.setHeader('location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err){
            throw err
        }
        res.end(data)
    })
})

server.listen(3000, 'localhost', () => {
    console.log('HEEEEEY')
}) 