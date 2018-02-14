const express = require('express')
const next = require('next')
const { join } = require('path')
const routes = require('./routes')
const { Cache } = require('./server/middlewares')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const cache = Cache(app)
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  /* Server API */
  // server.use('/api', someRoutes)

  /* Service Worker */
  server.use((req, res, next) => {
    if (req.url === '/service-worker.js') {
      const filePath = join(__dirname, '.next', req.url)
      app.serveStatic(req, res, filePath)
    } else {
      next()
    }
  })

  /* LRU Cache */
  server.get('/albums/:id', (req, res) => {
    cache(req, res, '/albums', { ...req.params })
  })

  /* Routes without LRU Cache */
  server.use(handle)

  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
