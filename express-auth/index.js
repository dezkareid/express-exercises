const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const express = require('express')
const config = require('./conf')
const jwt = require('jsonwebtoken')
const User = require('./models/User')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/sample', { useNewUrlParser: true })

app.use(express.json())

app.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(console.error)
})

app.post('/auth', (req, res) => {
  let user = null
  User.findOne({ email: req.body.email })
    .then((userData) => {
      user = userData
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(function (isEqual) {
      if (isEqual) {
        jwt.sign({ _id: user._id }, config.secret, function (err, token) {
          if (!err) {
            res.status(200).json({ token })
          } else {
            res.sendStatus(401)
          }
        })
      } else {
        res.sendStatus(401)
      }
    })
})

app.get('/profile', (req, res) => {
  const token = req.get('Authorization')
  if (token) {
    jwt.verify(token, config.secret, {}, function (error, decoded) {
      if (error) {
        res.sendStatus(401)
      } else {
        User.findOne({ _id: decoded._id })
          .then((user) => {
            res.status(200).json(user)
          })
      }
    })
  } else {
    res.sendStatus(401)
  }
})

app.listen(port, () => {
  console.log('Are you ready?')
})
