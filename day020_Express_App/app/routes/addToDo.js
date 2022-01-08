const express = require('express');
const router = express.Router();

// Adding a todo
router.post('/', require('../controllers/addToDo'))


module.exports = router;