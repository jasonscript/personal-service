const Controller = require('egg').Controller

class StepsController extends Controller {
  async steps () {
    const { ctx, ctx: { service } } = this
    const steps = await service.steps.query()
    ctx.body = steps
  }

  async check () {
    const { ctx, ctx: { service, request } } = this
    const result = await service.steps.check(request.body)
    ctx.body = result
  }

  async add () {
    const { ctx, ctx: { service, request } } = this
    const result = await service.steps.add(request.body)
    ctx.body = result
  }
}

module.exports = StepsController
