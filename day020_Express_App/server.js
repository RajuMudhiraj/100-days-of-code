
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


// requiring sequelize instance and connect function and connecting to Database
const { sequelize, connect } = require('./app/config/database')
connect(sequelize)


// addingg cors middleware to enable cross origin resource sharing
app.use(cors())

// adding body parser middleware to parse json and url encoded requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Node.js and Express.js" });
});

// signUp route
app.use('/signUp', require('./app/routes/signUp'));

// Sign in route
app.use('/signIn', require('./app/routes/signIn'))


// Add todo
app.use('/addToDo', require('./app/routes/addToDo'))



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
