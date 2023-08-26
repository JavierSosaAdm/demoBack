const fs = require('fs');
const axios = require('axios');
const { User, Post } = require('../db');
const { createUser } = require('./controller')
const saludar = (req, res) => {
    try {
        res.status(200).send('Hola Logan')   
        
    } catch (error) {
        res.status(400).json({error: error.message})

    }
};

const logan = (req, res) => {
    try {
        const html = fs.readFileSync(__dirname + '../../index.html')
        res.setHeader('content-type', 'text/html')
        res.status(200).send(html);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const josefina = (req, res) => {
    try {
        const obj = {nombre: 'Josefina', alias: 'Pastelerita sexy'};
        res.status(200).json(obj)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const users = (req, res) => {
    try {
        const {name, age, job} = req.query;
        if (name) return res.status(200).send(`Recibí el nombre de ${name} de edad ${age} años y trabaja de ${job}`)
    
        res.status(200).send('aquí se encuentran todos los usuarios')
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getById = (req, res) => {
    try {
        const {id} = req.params;
        res.status(200).send(`Aquí se encuentra el usuario ${id}`)   
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postUser = async (req, res) => {
    try {
        const {name, email, phone, gender} = req.body;
        const newUser = await User.createUser(name, email, phone, gender)
        res.status(200).json(newUser);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}



const personal = async (req, res) => {
    try {
        let {id} = req.params;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/5`)
        const trabajador = response.data;

        if (!trabajador) throw new Error('id no encontrado');

        res.status(200).send(trabajador)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
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

function tradicional() {
    axios('https://jsonplaceholder.typicode.com/users/3')
    .then((response) => response.data)
    .then((data) => console.log('Promesa tradicional: ', data.name))
}

tradicional();


async function conAsync() {
    const response1 = (await axios('https://jsonplaceholder.typicode.com/users/5')).data;
    const response2 = (await axios('https://jsonplaceholder.typicode.com/users/7')).data;
    const response3 = (await axios('https://jsonplaceholder.typicode.com/users/9')).data;

    // console.log(response1.username, response2.username, response3.username);
    console.log(response1.name, response2.name, response3.name);
    // console.log(response1.phone, response2.phone, response3.phone);
    // console.log(response1.address, response2.address, response3.address);
}

conAsync();

module.exports = { saludar, logan, josefina, users, getById, postUser, personal }