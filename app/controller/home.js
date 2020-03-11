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
}

module.exports = HomeController;
