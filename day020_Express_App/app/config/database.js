// configuring dotenv 

const { Sequelize } = require('sequelize')

console.log(process.env.DB)


const sequelize = new Sequelize(process.env._DIALECT + "://" + process.env._USR + ":" + process.env._PWD + "@" + process.env._HOST + "/" + process.env._DB, {

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