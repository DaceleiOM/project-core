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

  async getProductByBranchId (branchId) {
    const product = await this.repository.getAll({
      where: { branch_id: branchId },
      attributes: { exclude: ['created_at', 'updated_at'] },
      include: [{
        model: Brand,
        as: 'brands',
        attributes: { exclude: ['created_at', 'updated_at'] }
      }]
    })
    return product
  }
}

module.exports = ProductCategoryService
