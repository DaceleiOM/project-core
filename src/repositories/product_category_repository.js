const ProductCategory = require('../database/models/product_category')
const Repository = require('./repository')

class ProductCategoryRepository extends Repository {
  constructor () {
    super()
    this.model = ProductCategory
  }
}

module.exports = ProductCategoryRepository
