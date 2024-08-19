require('dotenv').config();  // Importa y configura dotenv para cargar variables de entorno

const { Sequelize } = require('sequelize');

// Construye la URL de conexión usando variables de entorno
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',  // Especifica el dialecto de la base de datos
    port: process.env.DB_PORT,
    dialectModule: require('mysql2') // Asegúrate de que mysql2 está instalado
});

module.exports = sequelize;
