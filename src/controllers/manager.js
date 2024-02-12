const Controller = require('../decorators/controller')
const ManagerService = require('../services/manager_service')

class ManagerController {
  constructor () {
    this.service = new ManagerService()
  }

  async create (req) {
    const data = req.body
    const manager = await this.service.create(data)
    return [manager, 'The new manager was created']
  }

  async update (req) {
    const id = req.params.id
    const data = req.body
    const manager = await this.service.update(id, data)
    return [manager, 'Update manager was succesfull']
  }

  async delete (req) {
    const id = req.params.id
    const manager = await this.service.delete(id)
    return [manager, 'Delete manager was succesfull']
  }
}

const managerController = new ManagerController()
const controller = new Controller(managerController)

module.exports = controller
