const express = require('express');
const { registerUser } = require('../controllers/userController');
const { loginController } = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerUser);

module.exports = router;
