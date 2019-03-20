const { Schema } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  email: String,
  password: String
})

userSchema.pre('save', function (next) {
  if (this.password) {
    const saltRounds = 10
    const user = this
    bcrypt.hash(this.password, saltRounds)
      .then(function (hash) {
        user.password = hash
        next()
      })
      .catch(function (error) {
        return error
      })
  } else {
    next()
  }
})

module.exports = userSchema
