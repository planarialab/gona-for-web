// @flow
const users = require('./users')
const examples = require('./examples')

module.exports = app => ({
  examples: examples(app).routes(),
  users: users(app).routes()
})
