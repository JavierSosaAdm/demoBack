const { Router } = require('express');
const fs = require('fs');

const { saludar, logan, josefina, users, getById, postUser, personal } = require('../controllers/index');
const { getUser, getId, createUser2, poster, upDate, deleteUser } = require('../controllers/controller')

const mainRouter = Router();



mainRouter.get('/', saludar);

mainRouter.get('/logan', logan)

mainRouter.get('/josefina', josefina)

mainRouter.get('/users', getUser)

mainRouter.get('/users/:id', getById)

mainRouter.post('/users', postUser)

mainRouter.get('/personal', personal)

mainRouter.post('/', createUser2)

mainRouter.post('/posteos', poster)

mainRouter.get('/detail:id', getId)

mainRouter.put('/update', upDate)

mainRouter.delete('/delete/:id', deleteUser)

module.exports = mainRouter;

