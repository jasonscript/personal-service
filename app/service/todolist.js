const Service = require('egg').Service

class TodolistService extends Service {
  async query () {
    const sql = `select * from todo_list order by date desc, status;`
    const todolist = await this.app.mysql.query(sql)
    return todolist
  }

  async customQuery (params) {
    let where = 'where 1=1';
    if ('status' in params) {
      where = `${where} and status in (${params.status.join(',')})`
    }
    const sql = `select * from todo_list ${where} order by date desc;`
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

  async update ({ id, values }) {
    const { title, date, description } = values
    const sql = `update todo_list set title = '${title}', date = '${date}', description = '${description}' where id = ${id};`
    const result = await this.app.mysql.query(sql)
    return result.affectedRows === 1
  }
}

module.exports = TodolistService
