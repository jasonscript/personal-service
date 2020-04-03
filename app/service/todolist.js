const Service = require('egg').Service

class TodolistService extends Service {
  async query () {
    const sql = `select * from todo_list order by date desc;`
    const todolist = await this.app.mysql.query(sql)
    return todolist
  }

  async add (values) {
    const result = await this.app.mysql.insert('todo_list', values)
    return result.affectedRows === 1
  }

  async updateStatus ({ id, status }) {
    const sql = `update todo_list set status = ${status} where id = ${id};`
    const result = await this.app.mysql.query(sql)
    return result.affectedRows === 1
  }
}

module.exports = TodolistService
