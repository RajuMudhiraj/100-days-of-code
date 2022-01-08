const bcrypt = require('bcrypt')
const ToDo = require('../models/ToDo')

const viewToDos = (req, res) => {



    ToDo.findAll()
        .then(result => {

            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " " })
        })


};



module.exports = viewToDos;