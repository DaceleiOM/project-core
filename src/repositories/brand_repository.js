const Brand = require('../database/models/brand')
const Repository = require('./repository')

class BrandRepository extends Repository {
  constructor () {
    super()
    this.model = Brand
  }
}

module.exports = BrandRepository
