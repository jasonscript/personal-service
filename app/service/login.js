const Service = require('egg').Service

class LoginService extends Service {
  async loginAccount () {
    return {
      status: "ok",
      type: "account",
      currentAuthority: "admin"
    }
  }
}

module.exports = LoginService
