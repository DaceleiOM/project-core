const Controller = require('../decorators/controller')
const UserService = require('../services/user_service')

class UserController {
  constructor () {
    this.service = new UserService()
  }

  async index () {
    const data = await this.service.index()
    return [data, 'Get data user successfully']
  }
}

const userController = new UserController()
const controller = new Controller(userController)

module.exports = controller
