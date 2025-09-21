const express = require('express');
const AuthController = require('../controllers/authController');
const authRouter = express.Router();

const authController = new AuthController()

authRouter.get('/register', authController.getRegister);

authRouter.get('/login', authController.getLogin);

authRouter.post('/register', authController.postRegister);

authRouter.get('/products', authController.getProducts);

authRouter.post('/login', authController.postLogin);


module.exports = authRouter