const fs = require('fs');
const axios = require('axios');
const saludar = (req, res) => {
    res.status(200).send('Hola Logan')   
};

const logan = (req, res) => {
    const html = fs.readFileSync(__dirname + '../../index.html')
    res.setHeader('content-type', 'text/html')
    res.status(200).send(html);
}

const josefina = (req, res) => {
    const obj = {nombre: 'Josefina', alias: 'Pastelerita sexy'};
    res.status(200).json(obj)
}

const users = (req, res) => {
    const {name, age, job} = req.query;
    if (name) return res.status(200).send(`Recibí el nombre de ${name} de edad ${age} años y trabaja de ${job}`)

    res.status(200).send('aquí se encuentran todos los usuarios')
}

const getById = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Aquí se encuentra el usuario ${id}`)   
}

const postUser = (req, res) => {
    const {nombre} = req.body;
    res.status(200).send(`Agregando una nueva persona a la lista de nombre ${nombre}`)
    
}

// function resolveAfterTwoSeconds() {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             console.log('Josefina no me hagas perder tiempo');
//         }, 2000)
//     });
// }

// async function asyncCall() {
//     setTimeout(() => {
//         console.log('esperame unos meses mas');
//     }, 3000)
    
//     const result = await resolveAfterTwoSeconds();
//     console.log(result);
// }

// asyncCall();

function traducional() {
    axios('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.data)
    .then((data) => console.log('Promesa tradicional: ', data.name))
}

traducional();


async function conAsync() {
    const response1 = (await axios('https://jsonplaceholder.typicode.com/users/1')).data;
    const response2 = (await axios('https://jsonplaceholder.typicode.com/users/2')).data;
    const response3 = (await axios('https://jsonplaceholder.typicode.com/users/3')).data;

    console.log(response1.username, response2.username, response3.username);
    console.log(response1.name, response2.name, response3.name);
    console.log(response1.phone, response2.phone, response3.phone);
    console.log(response1.address, response2.address, response3.address);
}

conAsync();

module.exports = { saludar, logan, josefina, users, getById, postUser }