const Koa = require('koa')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  const server = new Koa()

  const routes = require('./routes')(app)

  server.use(async (ctx, next) => {
    const start = Date.now()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
    await next()
  })

  Object.keys(routes).forEach(name => {
    server.use(routes[name])
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
