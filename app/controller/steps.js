const Controller = require('egg').Controller

class StepsController extends Controller {
  async steps () {
    const { ctx, ctx: { service } } = this
    const steps = await service.steps.query()
    ctx.body = steps
  }
}

module.exports = StepsController
