const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const ToDo = sequelize.define('Todos', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    toDo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { timestamps: false });

module.exports = ToDo;