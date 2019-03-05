const users = require('./repository')

function createUser (req, res) {
  const user = req.body
  user.id = users.length + 1
  users.push(user)
  res.status(201).json(user)
}

module.exports = createUser
