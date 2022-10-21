const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.DB_NAME,
    "root",
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);
module.exports = sequelize;