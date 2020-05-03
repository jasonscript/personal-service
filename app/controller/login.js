const Controller = require('egg').Controller

class LoginController extends Controller {
  async loginAccount () {
    const { ctx, ctx: { service } } = this
    const result = await service.login.loginAccount()
    ctx.body = result
  }
}

module.exports = LoginController
