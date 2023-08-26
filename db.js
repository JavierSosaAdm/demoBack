require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const Postmodel = require('./models/Post')

const database = new Sequelize (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/josefina`,
{ logging: false } // es para limpiar la consola
);

UserModel(database); // Es una función que recibe la instancia de Sequelize que define el modelo.
Postmodel(database); 

const { User, Post } = database.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = { database, ...database.models }; // para exportar todos los modelos
