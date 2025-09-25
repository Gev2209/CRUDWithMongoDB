const bcrypt = require('bcryptjs');



class AuthServices {
 constructor (model) {
    this.model = model
 }
 async getUsers (skip = 0, limit = 10) {
   const users = await this.model.users.find().skip(skip).limit(limit);
   return users
 }

 async countUsers () {
  return await this.model.users.countDocuments()
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