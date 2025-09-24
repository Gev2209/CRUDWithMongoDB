const bcrypt = require('bcryptjs');



class AuthServices {
 constructor (model) {
    this.model = model
 }
 async getUsers () {
   const users = await this.model.users.find();
   return users
 }

 async postRegister (body) {
      const newUser = await this.model.users(body)
      newUser.save();
}
   async postLogin (body) {
        const currentUser = await this.model.users.findOne({email: body.email})
        let comparePass;
        if (!currentUser) {
          comparePass = false
        } else {
         comparePass = await bcrypt.compare(body.password,currentUser.password)
        }
        return {comparePass,currentUser}
    }

    async getUserLogged (id) {
      const user = await this.model.users.findById(id);
      return user
    }
}


module.exports = AuthServices