const express = require('express')
const apiRouter = express.Router()
const usersRouter = require('./users')

apiRouter.all('/', function (req, res) {
  res.json({ name: 'Apimon', version: 1.0 })
})

apiRouter.use('/users', usersRouter)
module.exports = apiRouter
