const Controller = require('../decorators/controller')
const BrandService = require('../services/brand_service')

class BrandController {
  constructor () {
    this.service = new BrandService()
  }

  async create (req) {
    const data = req.body
    const brand = await this.service.create(data)
    return [brand, 'The new brand was created']
  }

  async update (req) {
    const id = req.params.id
    const data = req.body
    const brand = await this.service.update(id, data)
    return [brand, 'Update brand was succesfull']
  }

  async delete (req) {
    const id = req.params.id
    const brand = await this.service.delete(id)
    return [brand, 'Delete brand was succesfull']
  }
}

const brandController = new BrandController()
const controller = new Controller(brandController)

module.exports = controller
