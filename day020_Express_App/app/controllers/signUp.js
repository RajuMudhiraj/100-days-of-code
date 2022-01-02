const bcrypt = require('bcrypt')
const User = require('../models/User')

const signUp = (req, res) => {


    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            res.status(500).json({ Error: err + " Something went wrong while hashing password" })
        }
        if (hash) {
            const user = {
                email: req.body.email,
                password: hash,
                name: req.body.name,
                gender: req.body.gender,
                dob: req.body.dob
            }
            User.create(user)
                .then(result => {

                    res.status(201).json("User created successfully!")
                })
                .catch(err => {
                    res.status(500).json({ Error: err + " Something went wrong while creating user." })
                })
        }

    });
}


module.exports = signUp;