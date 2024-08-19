require('dotenv').config();  // Asegúrate de cargar las variables de entorno

const Sequelize = require('sequelize');

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_HOST || !process.env.DB_DRIVER || !process.env.DB_PORT) {
  throw new Error('Missing one or more required environment variables for Sequelize configuration.');
}

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DRIVER,
        port: process.env.DB_PORT,
        dialectModule: require('mysql2'),
      }
    );

module.exports = sequelize;
