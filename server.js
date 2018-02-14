const express = require('express')
const next = require('next')
const helmet = require('helmet')
const compression = require('compression')
const { resolve } = require('path')
const { Cache } = require('./server/middlewares')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const cache = Cache(app)
const handler = app.getRequestHandler()

/* Route Handler with LRU Cache */
const routeHandler = routes.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    cache(req, res, route.page, query)
  }
)

app.prepare().then(() => {
  const server = express()

  /* secure */
  server.use(helmet())
  /* gzip */
  server.use(compression({ threshold: 0 }))

  /* LRU Cache */
  /* Routes with LRU Cache */
  server.use(routeHandler)

  /* Server API */
  // server.use('/api', someRoutes)

  /* Service Worker */
  server.get('/service-worker.js', (req, res) =>
    app.serveStatic(req, res, resolve('./.next/service-worker.js'))
  )

  server.get('*', (req, res) => handler(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
