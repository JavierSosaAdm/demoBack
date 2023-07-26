const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const {url} = req;
    
    if (url === '/josefina') {
        
        res.writeHead(200, {'content-type': 'text/json'});
        const obj = {nombre: 'Josefina', alias: 'Pastelerita sexy'};
        return res.end(JSON.stringify(obj));
    }

    if (url === '/logan') {

        res.writeHead(200, {'content-type': 'text/plain'});
        return res.end('Hola Logan')
    }
    
    if (url === '/') {
        
         res.writeHead(200, {'content-type': 'text/html'});
        const html = fs.readFileSync(__dirname + '/index.html')
        return res.end(html);
    }

    


}).listen(3001, 'localhost');
