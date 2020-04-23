const Service = require('egg').Service

class TemperatureService extends Service {
  async query () {
    const sql = `select * from temperature order by time desc;`
    const temperatures = await this.app.mysql.query(sql)
    return temperatures
  }

  async customQuery ({ pageSize = 10, pageNum = 1 }) {
    const offset = pageSize * (pageNum - 1)
    const count = await this.app.mysql.query('select count(*) as count from temperature')
    const total = count[0].count
    if (total === 0 || total <= offset) {
      return {
        total,
        list: []
      }
    }
    const temperatures = await this.app.mysql.select('temperature', {
      orders: [['time', 'desc']],
      limit: pageSize,
      offset
    })
    return {
      total,
      list: temperatures
    }
  }

  async add (values) {
    const result = await this.app.mysql.insert('temperature', values)
    return result.affectedRows === 1
  }
}

module.exports = TemperatureService
