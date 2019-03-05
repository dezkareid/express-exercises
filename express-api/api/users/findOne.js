const users = require('./repository')

function findOne (req, res) {
  const userId = +req.params.userId
  const [user] = users.filter(user => user.id === userId)
  res.json(user)
}

module.exports = findOne
