const bcrypt = require('bcrypt')
const ToDo = require('../models/ToDo')

const addToDo = (req, res) => {

    const input = {
        toDo: req.body.toDo,
        isDone: req.body.isDone
    }

    ToDo.create(input)
        .then(result => {

            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " " })
        })


};



module.exports = addToDo;