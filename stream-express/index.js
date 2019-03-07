const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.all('/', (req, res) => {
  const readableStream = fs.createReadStream('./index.html')
  readableStream.pipe(res)
})

app.listen(port, () => {
  console.log('Are you ready')
})
