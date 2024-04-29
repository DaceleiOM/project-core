const Controller = require('../decorators/controller')
const BrandCategoryService = require('../services/brand_category_service')

class BrandCategoryController {
  constructor () {
    this.service = new BrandCategoryService()
  }

  async getByBrand (req) {
    const id = req.params.BrandId
    const categories = await this.service.getByBrand(id)
    return [categories, 'categories:']
  }

  async create (req) {
    const data = req.body
    const brandCategory = await this.service.create(data)
    return [brandCategory, 'The new brandCategory was created']
  }

  async update (req) {
    const id = req.params.id
    const data = req.body
    const brandCategory = await this.service.update(id, data)
    return [brandCategory, 'Update brandCategory was succesfull']
  }

  async delete (req) {
    const id = req.params.id
    const brandCategory = await this.service.delete(id)
    return [brandCategory, 'Delete brandCategory was succesfull']
  }
}

const brandCategoryController = new BrandCategoryController()
const controller = new Controller(brandCategoryController)

module.exports = controller
