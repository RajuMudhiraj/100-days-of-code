const User = require('./User')
const Todos = require('./Todos')

User.hasMany(Todos)

Todos.belongsTo(User)

