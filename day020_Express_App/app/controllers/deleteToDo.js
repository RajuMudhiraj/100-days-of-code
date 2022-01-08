const ToDo = require('../models/ToDo')

const deleteToDo = (req, res) => {



    ToDo.destroy({
        where: { id: req.body.id }
    })
        .then(result => {

            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " " })
        })


};

module.exports = deleteToDo;