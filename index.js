const express = require('express');
const server = express();
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter');


server.listen(3001, () => {
    console.log('servidor levantado en puerto 3001');
});

server.use(morgan('dev'));
server.use(express.json());
server.use(mainRouter);


// const { resolve } = require('path');
 

// http.createServer((req, res) => {
//     const {url} = req;

//     res.setHeader('Access-Cotrol-Allow-Origin', '*');
    
//     if (url === '/josefina') {
        
//         res.writeHead(200, {'content-type': 'text/json'});
//         const obj = {nombre: 'Josefina', alias: 'Pastelerita sexy'};
//         return res.end(JSON.stringify(obj));
//     }

//     if (url === '/logan') {

//         res.writeHead(200, {'content-type': 'text/plain'});
//         return res.end('Hola Logan')
//     }
    
//     if (url === '/') {
        
    //          res.writeHead(200, {'content-type': 'text/html'});
    //         const html = fs.readFileSync(__dirname + '/index.html')
    //         return res.end(html);
    //     }


//     if (url === '/chicas') {
//         res.writeHead(200, {'content-type': 'text/json'});
//         const chicas = [
//             {id: 1, name: 'Josefina', age: 30},
//             {id: 2, name: 'Jessica', age: 32},
//             {id: 3, name: 'Luli', age: 32},
//             {id: 4, name: 'Lucia', age: 32}
//         ]
//         return res.end(JSON.stringify(chicas));
//     }

//     const promise = new Promise((resolve, reject) => {
//         if (23 === 23) {
//             resolve(5)
//         } else {
//             reject('eres estupido y casi quedas afuera')
//         }
//     });
    
//     promise
//         .then((resolve) => resolve + 5)
//         .then((resolve) => resolve + 5)
//         .then((resolve) => resolve + 5)
//         .then((resolve) => {console.log(resolve);}); 

//     const getCharacters = () => {
//         fetch('https://rickandmortyapi.com/api/character/1')
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log('no salió boien'))
//     };

//     console.log(getCharacters)
    

//     res.writeHead(400, {'content-type': 'text/plain'});
//     return res.end('error en la pagina')


// }).listen(3001, 'localhost');












