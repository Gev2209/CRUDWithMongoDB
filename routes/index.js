var express = require('express');
const AuthController = require('../controllers/authController');
var router = express.Router();

const authController = new AuthController()

router.get('/', authController.getUsers);

module.exports = router;
