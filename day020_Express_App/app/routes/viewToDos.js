const express = require('express');
const router = express.Router();

// View all todos
router.post('/', require('../controllers/viewToDos'))


module.exports = router;