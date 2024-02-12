const BrandCategories = require('../database/models/brand_categories')
const Repository = require('./repository')

class BrandCategoriesRepository extends Repository {
  constructor () {
    super()
    this.model = BrandCategories
  }
}

module.exports = BrandCategoriesRepository
