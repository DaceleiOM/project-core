const Product = require('../database/models/product')
const Repository = require('./repository')

class ProductRepository extends Repository {
  constructor () {
    super()
    this.model = Product
  }
}

module.exports = ProductRepository
