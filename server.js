const express = require('express')
const next = require('next')
const routes = require('./routes')
const Cache = require('./middlewares/lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const cache = Cache(app)
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  /* Server API */
  // server.use('/api', someRoutes)

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
