const { Schema } = require("../schema/Schema")

class AuthController {
    async getUsers (req, res) {
        const users = await req.app.locals.services.users.getUsers()
        res.render('index', {title: 'express',users})
    }
    async getRegister (req, res) {
        res.render('register')
    }
    async getLogin (req, res) {
        res.render('login')
    }

   async getProducts (req, res) {
    res.render('product')
   } 
    async postRegister (req, res) {
        const validator = await Schema.validateAsync(req.body);
        await req.app.locals.services.users.postRegister(validator)
        res.redirect('/auth/login')
    }


    async postLogin (req, res) {
        const comparePass = await req.app.locals.services.users.postLogin(req.body)
        if (comparePass) {
            res.redirect('/products')
        } else {
            res.json({messsage: 'Erorr'});
        }
    }
}

module.exports = AuthController