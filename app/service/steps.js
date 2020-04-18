const Service = require('egg').Service

class StepsService extends Service {
  async query () {
    const sql = `select * from steps order by date desc;`
    const steps = await this.app.mysql.query(sql)
    return steps
  }

  async check (params) {
    const { date, name } = params
    const sql = `select count(*) as count from steps where date='${date}' and name='${name}';`
    const result = await this.app.mysql.query(sql)
    return result[0].count > 0
  }
}

module.exports = StepsService
