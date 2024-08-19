const Sequelize = require('sequelize');

// Construye la URL de conexión si usas variables separadas
const databaseUrl = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const sequelize = new Sequelize(databaseUrl, {
    dialect: 'mysql',
    dialectModule: require('mysql2')
});

module.exports = sequelize;
