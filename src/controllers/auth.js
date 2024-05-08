const UserService = require('../services/user_service')
const { http, responseCode } = require('../helpers/request')

class AuthController {
  // user register-----------------------------------------------------------------------------------------------------------
  static async userRegister (req, res) {
    try {
    const data = req.body
    return res.json(await UserService.create(data))
    } catch (e) {
    return res
        .status(responseCode.SERVER_ERROR)
        .json(http.error(null, responseCode.SERVER_ERROR, [e.message]))
    }
  }
  // Manager login---------------------------------------------------------------------------------------------------------
  static async userLogin (req, res) {
    try {
      const data = req.body
      return res.json(await UserService.login(data))
    } catch (e) {
      return res
        .status(responseCode.SERVER_ERROR)
        .json(http.error(null, responseCode.SERVER_ERROR, [e.message]))
    }
  }
}

module.exports = AuthController
