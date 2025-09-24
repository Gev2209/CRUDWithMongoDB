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

    async getUser (req, res) {
        res.render('user')
    }
   async getProducts (req, res) {
    res.render('product')
   } 
    async postRegister (req, res) {
        const validator = await Schema.validateAsync(req.body);
        await req.app.locals.services.users.postRegister({...validator, avatarUrl : req.file.filename})
        console.log(req.file);
        console.log(req.file.filename);
        
        res.redirect('/auth/login')
    }


    async postLogin (req, res) {
        const result = await req.app.locals.services.users.postLogin(req.body)
        const id = result.currentUser.id
        if (result) {
            res.redirect(`/logged/${id}`)
        } else {
            res.json({messsage: 'Erorr'});
        }
    }

    async getUserLogged (req, res) {
        try {
            const user = await req.app.locals.services.users.getUserLogged(req.params.id)
            res.status(200).render('logged',{title: 'express',user})
        } catch (error) {
            res.status(403).json({message: error})
        }
        

    }
}

module.exports = AuthController