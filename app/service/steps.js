const Service = require('egg').Service

class StepsService extends Service {
  async query () {
    const sql = `select * from steps order by date desc;`
    const steps = await this.app.mysql.query(sql)
    return steps
  }
}

module.exports = StepsService
