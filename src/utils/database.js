
const { Sequelize } =  require("sequelize");
require("dotenv").config()
// crear una instancia con parametros de configuracion de nuestra base de datos
// un objeto de configuracion ---> credenciales de mi base de datos
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER, // postgres para ustedes
  host: process.env.DB_HOST, // 127.0.0.1
  port: process.env.DB_PORT ,// puerto de la base de dato
  password: process.env.DB_PASSWORD, // pones tu contrasena
  dialect: "postgres", // la base de datos que estamos usando
  logging: false,
})

module.exports =  db;