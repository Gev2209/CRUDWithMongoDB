var express = require('express');
const AuthController = require('../controllers/authController');
var router = express.Router();

const authController = new AuthController();
router.get('/users', authController.getUsers);

module.exports = router;
