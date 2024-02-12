const Service = require('./service')
const BrandCategoryRepository = require('../repositories/brand_category_repository')

class BrandCategoryService extends Service {
  constructor () {
    super(new BrandCategoryRepository())
    this.repository = new BrandCategoryRepository()
  }

  async create (data) {
    const brandCategory = await this.repository.create(data)
    if (!brandCategory) throw new NotFoundError('brandCategory doesnt exist')
    return brandCategory
  }

  async update (id, data) {
    const brandCategory = await this.repository.getById(id)
    if (!brandCategory) throw new NotFoundError('brandCategory not found')
    const updateBrandCategory = await this.repository.update(id, data)
    return updateBrandCategory[1][0]
  }

  async delete (id) {
    const brandCategory = await this.repository.getById(id)
    if (!brandCategory) { throw new Error('brandCategory not found') }
    const deleteBrandCategory = await this.repository.remove(id)
    return deleteBrandCategory
  }
}

module.exports = BrandCategoryService
