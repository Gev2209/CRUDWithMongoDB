const express = require('express');
const AuthController = require('../controllers/authController');
const multer = require('multer');
const authRouter = express.Router();
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

const authController = new AuthController()

authRouter.get('/register', authController.getRegister);

authRouter.get('/login', authController.getLogin);

authRouter.post('/register', upload.single("avatar"), authController.postRegister);

authRouter.get('/products', authController.getProducts);

authRouter.post('/login', authController.postLogin);


module.exports = authRouter