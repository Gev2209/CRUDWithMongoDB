const express = require('express');
const AuthController = require('../controllers/authController');
const loggedRoute = express.Router();

const authController = new AuthController()

loggedRoute.get('/logged/:id', authController.getUserLogged)


module.exports = loggedRoute