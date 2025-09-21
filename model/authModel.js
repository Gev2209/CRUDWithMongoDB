const { Schema,model } = require("mongoose");
const bcrypt = require('bcryptjs');
const usersSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must be fill'],
    },
    email: {
      type: String,
      required: [true, 'Email must be fill'],
      unique: [true, 'Email must be uniq']
    },
    password: {
      type: String,
      required: [true, 'Email must be fill'],
      unique: [true, 'Email must be uniq']
    }
})

usersSchema.pre('save', async function (next) {
  const hashPass = await bcrypt.hash(this.password, 10);
  this.password = hashPass
  next()
})

module.exports = model('users', usersSchema);
