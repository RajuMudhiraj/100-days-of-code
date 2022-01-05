const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const Todos = sequelize.define('Todos', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    todo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { timestamps: false });

module.exports = Todos;