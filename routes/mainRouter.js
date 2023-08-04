const { Router } = require('express');
const fs = require('fs');

const { saludar, logan, josefina, users, getById, postUser, personal } = require('../controllers/index')

const mainRouter = Router();



mainRouter.get('/', saludar);

mainRouter.get('/logan', logan)

mainRouter.get('/josefina', josefina)

mainRouter.get('/users', users)

mainRouter.get('/users/:id', getById)

mainRouter.post('/users', postUser)

mainRouter.get('/personal', personal)

module.exports = mainRouter;

