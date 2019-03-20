const userSchema = require('../schemas/UserSchema')
const { model } = require('mongoose')
const userModel = model('User', userSchema)

module.exports = userModel
