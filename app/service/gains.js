const Service = require('egg').Service

class GainsService extends Service {
  async query () {
    const sql = `select * from gains order by date desc;`
    const gains = await this.app.mysql.query(sql)
    return gains
  }

  async add (values) {
    const result = await this.app.mysql.insert('gains', values)
    return result.affectedRows === 1
  }
}

module.exports = GainsService