const fs = require('fs');
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

module.exports = { saludar, logan, josefina, users, getById, postUser }