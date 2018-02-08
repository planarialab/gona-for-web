const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  /* Server API */
  // server.use('/api', someRoutes)

  /* Server Side Rendering */
  server.get('/post/:id', async (req, res) => {
    await app.render(req, res, '/post', req.params)
  })

  // server.get('/users/:id', async (req, res) => {
  //   await app.render(req, res, '/users', req.params)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
