const BrandCategory = require('../database/models/brand_category')
const Repository = require('./repository')

class BrandCategoryRepository extends Repository {
  constructor () {
    super()
    this.model = BrandCategory
  }
}

module.exports = BrandCategoryRepository
