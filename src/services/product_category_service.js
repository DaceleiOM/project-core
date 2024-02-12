const Service = require('./service')
const ProductCategoryRepository = require('../repositories/product_category_repository')

class ProductCategoryService extends Service {
  constructor () {
    super(new ProductCategoryRepository())
    this.repository = new ProductCategoryRepository()
  }

  async create (data) {
    const relation = await this.repository.create(data)
    if (!relation) throw new NotFoundError('relation doesnt exist')
    return relation
  }

  async update (id, data) {
    const relation = await this.repository.getById(id)
    if (!relation) throw new NotFoundError('relation not found')
    const updateRelation = await this.repository.update(id, data)
    return updateRelation[1][0]
  }

  async delete (id) {
    const relation = await this.repository.getById(id)
    if (!relation) { throw new Error('relation not found') }
    const deleteRelation = await this.repository.remove(id)
    return deleteRelation
  }
}

module.exports = ProductCategoryService
