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

  async todolist () {
    const { ctx, ctx: { service } } = this
    const todolist = await service.todolist.query()
    ctx.body = todolist
  }

  validateCustomTodolist = params => {
    const pass = {
      success: true,
      message: ''
    }
    if ('status' in params) {
      // -1 for all
      const { status } = params
      if (status == null || status == -1) {
        delete params.status
        return pass
      }
      if (Array.isArray(status)) {
        if (status.length === 0 || status.includes(-1) || status.includes('-1')) {
          delete params.status
          return pass
        }
        return pass
      }
      if (['number', 'string'].includes(typeof status)) {
        params.status = [params.status]
        return pass
      }
      return {
        success: false,
        message: 'Please check parameter "status".'
      }
    }
    return true
  }

  async customTodolist () {
    const { ctx, ctx: { service, request } } = this
    const { body } = request
    const validateResult = this.validateCustomTodolist(body)
    if (validateResult.success) {
      const todolist = await service.todolist.customQuery(body)
      ctx.body = todolist
    } else {
      ctx.status = 400
      ctx.body = {
        success: false,
        errorCode: 400,
        errorMessage: validateResult.message
      }
    }
  }

  async addTodo () {
    const { ctx, ctx: { service, request } } = this
    const result = await service.todolist.add(request.body)
    ctx.body = result
  }

  async updateTodo () {
    const { ctx, ctx: { service, params, request } } = this
    let result = false
    if ('status' in request.body) {
      result = await service.todolist.updateStatus(Object.assign({ id: params.id }, request.body ))
    } else {
      result = await service.todolist.update({ id: params.id, values: request.body })
    }
    ctx.body = result
  }
}

module.exports = HomeController;
