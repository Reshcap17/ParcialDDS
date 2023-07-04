const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/databaseFile.db'
});

module.exports = sequelize;
