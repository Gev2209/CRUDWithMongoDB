const express = require('express');
const AuthController = require('../controllers/authController');
const userRoutes = express.Router();

const authController = new AuthController()
userRoutes.get('/user', authController.getUser);

module.exports = userRoutes