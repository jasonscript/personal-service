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

  async add (values) {
    const isRepeat = await this.check(values)
    if (isRepeat) {
      return {
        success: false,
        errorMessage: '重复记录'
      }
    }
    try {
      const result = await this.app.mysql.insert('steps', values)
      return {
        success: result.affectedRows === 1,
        errorMessage: ''
      }
    } catch (err) {
      return {
        success: false,
        errorMessage: err
      }
    }
  }
}

module.exports = StepsService
