const express = require('express')
const app = express()
const port = 3000

app.all('/', (req, res) => {
  res.status(200)
  res.send('Hello World')
  res.end()
})

app.listen(port, () => {
  console.log('Are you ready?')
})
