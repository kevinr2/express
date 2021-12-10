const { Sequelize } = require('sequelize')

const { config } = require('../config/config');
const setupModels = require('../db/models/index')


const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbname}`;

const sequilize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequilize);

module.exports = sequilize;