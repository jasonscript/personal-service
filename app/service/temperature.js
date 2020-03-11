const Service = require('egg').Service

class TemperatureService extends Service {
  async query () {
    const temperatures = await this.app.mysql.select('temperature')
    return { temperatures }
  }

  async add (values) {
    const result = await this.app.mysql.insert('temperature', values)
    return result.affectedRows === 1
  }
}

module.exports = TemperatureService
