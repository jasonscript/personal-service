const Service = require('egg').Service

class GainsService extends Service {
  async query () {
    const sql = `select * from gains order by date desc;`
    const gains = await this.app.mysql.query(sql)
    return gains
  }

  async customQuery ({ pageSize, pageNum }) {
    const offset = (pageNum - 1) * pageSize
    const sql = `select * from gains order by date desc limit ${offset},${pageSize};`
    const sqlCount = 'select count(*) as count from gains;'
    const total = await this.app.mysql.query(sqlCount)
    if (total[0].count === 0 || total[0].count <= offset) {
      return {
        total: total[0].count,
        list: []
      }
    }
    const result = await this.app.mysql.query(sql)
    return {
      total: total[0].count,
      list: result
    }
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
      const result = await this.app.mysql.insert('gains', values)
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

  async check (params) {
    const { date, name, channel } = params
    const sql = `select count(*) as count from gains where date='${date}' and name='${name}' and channel='${channel}';`
    const result = await this.app.mysql.query(sql)
    return result[0].count > 0
  }
}

module.exports = GainsService