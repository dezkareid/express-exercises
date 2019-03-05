const express = require('express')
const usersRouter = express.Router()
const listUsers = require('./list')
const createUser = require('./create')
const findOneUser = require('./findOne')

usersRouter.get('/', listUsers)
usersRouter.post('/', createUser)
usersRouter.get('/:userId', findOneUser)

module.exports = usersRouter
