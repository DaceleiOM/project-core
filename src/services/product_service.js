const Service = require('./service')
const ProductRepository = require('../repositories/product_repository')
const StorageService = require('../utils/storage_service')

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

  async createImage (id, file) {
    console.log('este es el id', id)
    const logo = await this.isExist(id, 'logo not found')
    const url = await StorageService.uploadImage(file, '1:1', `products/${id}_`, id, true)
    console.log('esta es la', url)
    if (logo?.images) await StorageService.deleteImage(logo.images)
    const updatedShopCategory = await this.repository.update(id, { images: url })
    return updatedShopCategory[1][0]
  }
}

module.exports = ProductService
