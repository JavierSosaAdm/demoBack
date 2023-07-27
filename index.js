const http = require('http');
const fs = require('fs');
 

http.createServer((req, res) => {
    const {url} = req;

    res.setHeader('Access-Cotrol-Allow-Origin', '*');
    
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


    if (url === '/chicas') {
        res.writeHead(200, {'content-type': 'text/json'});
        const chicas = [
            {id: 1, name: 'Josefina', age: 30},
            {id: 2, name: 'Jessica', age: 32},
            {id: 3, name: 'Luli', age: 32},
            {id: 4, name: 'Lucia', age: 32}
        ]
        return res.end(JSON.stringify(chicas));
    }

    res.writeHead(400, {'content-type': 'text/plain'});
    return res.end('error en la pagina')


}).listen(3001, 'localhost');
