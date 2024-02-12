const Controller = require('../decorators/controller')
const ProductCategoryService = require('../services/product_category_service')

class ProductCategoryController {
  constructor () {
    this.service = new ProductCategoryService()
  }

  async create (req) {
    const data = req.body
    const relation = await this.service.create(data)
    return [relation, 'The new relation was created']
  }

  async update (req) {
    const id = req.params.id
    const data = req.body
    const relation = await this.service.update(id, data)
    return [relation, 'Update relation was succesfull']
  }

  async delete (req) {
    const id = req.params.id
    const relation = await this.service.delete(id)
    return [relation, 'Delete relation was succesfull']
  }
}

const productCategoryController = new ProductCategoryController()
const controller = new Controller(productCategoryController)

module.exports = controller
