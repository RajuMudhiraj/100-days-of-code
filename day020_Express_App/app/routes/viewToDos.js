const express = require('express');
const router = express.Router();

// View all todos
router.get('/', require('../controllers/viewToDos'))


module.exports = router;