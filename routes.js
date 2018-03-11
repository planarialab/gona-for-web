// server
const nextRoutes = require('next-routes')
const routes = nextRoutes()

// FIXME: Unused routes need to remove
// routes.add({ name: null, pattern: '/post/:id', page: '/post' })
// routes.add({ name: 'users', pattern: '/users/:id', page: '/users' })
// routes.add({ name: 'albums', pattern: '/albums/:id', page: '/albums' })
routes.add({ name: 'tasks', pattern: '/tasks/:date', page: '/tasks' })

module.exports = routes
