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

  async getProductsByBrand (req) {
    const brandId = req.params.brandId
    const products = await this.service.getProductsByBrand(brandId)
    return [products, 'Get by BrandId is succesfull']
  }

  async getProductsByCategory (req){
    const category = req.params.brandCategoryId
    const products = await this.service.getProductsByCategory(category)
    return [products, 'Get by category is succesfull']

  }
}

const productCategoryController = new ProductCategoryController()
const controller = new Controller(productCategoryController)

module.exports = controller
