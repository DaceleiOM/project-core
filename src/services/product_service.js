const Service = require('./service')
const ProductRepository = require('../repositories/product_repository')

class ProductService extends Service {
  constructor () {
    super(new ProductRepository())
    this.repository = new ProductRepository()
  }
  async create (data) {
    const product = await this.repository.create(data)
    if (!product) throw new NotFoundError('product doesnt exist')
    return product
  }

  async update (id, data) {
    const product = await this.repository.getById(id)
    if (!product) throw new NotFoundError('product not found')
    const updateProduct = await this.repository.update(id, data)
    return updateProduct[1][0]
  }

  async delete (id) {
    const product = await this.repository.getById(id)
    if (!product) { throw new Error('product not found') }
    const deleteProduct = await this.repository.remove(id)
    return deleteProduct
  }
}

module.exports = ProductService
