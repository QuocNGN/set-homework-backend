const express = require('express');
const registerController = require('../Controllers/registerController');

const router = express.Router();

router.post('/register', registerController.createUser);

module.exports = router;