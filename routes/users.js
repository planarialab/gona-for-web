// @flow

const Router = require('koa-router')

module.exports = app => {
  const router = new Router()

  router.get('/users', async ctx => {
    await app.render(ctx.req, ctx.res, '/users', ctx.query)
    ctx.respond = false
  })

  return router
}
