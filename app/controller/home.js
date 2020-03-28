'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async temperature () {
    const { ctx } = this
    const temperatures = await ctx.service.temperature.query()
    ctx.body = temperatures
  }

  async addtemperature () {
    const { ctx } = this
    const result = await ctx.service.temperature.add(ctx.request.body)
    ctx.body = { success: result }
  }

  async gains () {
    const { ctx } = this
    const gains = await ctx.service.gains.query()
    ctx.body = gains
  }

  async addGains () {
    const { ctx } = this
    const result = await ctx.service.gains.add(ctx.request.body)
    ctx.body = { success: result }
  }

  async checkGains () {
    const { ctx, ctx: { service, request } } = this
    const result = await service.gains.check(request.body)
    ctx.body = result
  }
}

module.exports = HomeController;
