const Service = require('egg').Service
const pagedQuery = require('../utils/utils').pagedQuery

class TemperatureService extends Service {
  async query () {
    const sql = `select * from temperature order by time desc;`
    const temperatures = await this.app.mysql.query(sql)
    return temperatures
  }

  async customQuery ({ pageSize = 10, pageNum = 1 }) {
    const params = { pageSize, pageNum, table: 'temperature', orders: [['time', 'desc']] }
    const result = await pagedQuery(params, this.app.mysql)
    return result
  }

  async add (values) {
    const result = await this.app.mysql.insert('temperature', values)
    return result.affectedRows === 1
  }
}

module.exports = TemperatureService
