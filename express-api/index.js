const express = require('express')
const api = require('./api')
const app = express()
const port = 3000

app.use(express.json())

app.all('/', (req, res) => {
  console.log('http://' + req.hostname + req.path)
  res.send('Hello World')
  res.end()
})

app.use('/api', api)

app.listen(port, () => {
  console.log('Are you ready')
})
