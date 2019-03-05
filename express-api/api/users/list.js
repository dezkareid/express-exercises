const users = require('./repository')

function getUsers (req, res) {
  res.json(users)
}

module.exports = getUsers
