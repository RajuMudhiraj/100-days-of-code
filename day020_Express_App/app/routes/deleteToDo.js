const express = require('express');
const router = express.Router();

// Update todo by Id
router.post('/', require('../controllers/deleteToDo'))


module.exports = router;