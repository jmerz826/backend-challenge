const controller = require('./controller')
const auth = require('./auth')

module.exports = (router) => {
  router.get('/note/:id', async (req, res) => {
    await auth.requiresCurrentUser(req)
    await controller.readAll(req, res)
  })
}
