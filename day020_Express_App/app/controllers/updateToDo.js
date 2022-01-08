const ToDo = require('../models/ToDo')

const updateToDos = (req, res) => {



    ToDo.update({
        toDo: req.body.toDo,
        isDone: req.body.isDone
    }, {
        where: { id: req.body.id }
    })
        .then(result => {

            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " " })
        })


};

module.exports = updateToDos;