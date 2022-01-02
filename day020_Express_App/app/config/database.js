// configuring dotenv 
require('dotenv').config();

const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(process.env.DIALECT + "://" + process.env.USR + ":" + process.env.PWD + "@" + process.env.HOST + "/" + process.env.DB, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false,
    define: {
        freezeTableName: true
    }
})
async function connect(sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection to elephantsql has been established successfully.');

        // making sequelize create tables if not exist 
        await sequelize.sync({ alter: true })


    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, connect }