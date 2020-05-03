const Controller = require('egg').Controller

class UserController extends Controller {
  async currentUser () {
    const { ctx, ctx: { service } } = this
    const user = await service.user.currentUser()
    ctx.body = user
  }
}

module.exports = UserController
