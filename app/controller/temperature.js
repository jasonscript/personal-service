const Controller = require('egg').Controller

class TemperatureController extends Controller {
  async temperature () {
    const { ctx, ctx: { service } } = this
    const temperatures = await service.temperature.query()
    ctx.body = temperatures
  }

  async customTemperature () {
    const { ctx, ctx: { service, request } } = this
    const temperatures = await service.temperature.customQuery(request.body)
    ctx.body = temperatures
  }

  async addtemperature () {
    const { ctx, ctx: { service, request } } = this
    const result = await service.temperature.add(request.body)
    ctx.body = { success: result }
  }
}

module.exports = TemperatureController
