const express = require('express')
const api = require('./api')
const app = express()
const port = 3000

app.use('/assets', express.static('assets'))

app.use(express.json())

app.set('views', './client')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' })
})

app.get('/signup', (req, res) => {
  res.render('sign-up', { title: 'Signup Page' })
})

app.use('/api', api)

app.listen(port, () => {
  console.log('Are you ready')
})
