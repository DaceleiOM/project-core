const Service = require('./service')
const BrandRepository = require('../repositories/brand_repository')
const StorageService = require('../utils/storage_service')

class BrandService extends Service {
  constructor () {
    super(new BrandRepository())
    this.repository = new BrandRepository()
  }

  async getAll () {
    return await this.repository.getAll()
  }

  async create (data) {
    const brand = await this.repository.create(data)
    if (!brand) throw new NotFoundError('brand doesnt exist')
    return brand
  }

  async update (id, data) {
    const brand = await this.repository.getById(id)
    if (!brand) throw new NotFoundError('brand not found')
    const updateBrand = await this.repository.update(id, data)
    return updateBrand[1][0]
  }

  async delete (id) {
    const brand = await this.repository.getById(id)
    if (!brand) { throw new Error('brand not found') }
    const deleteBrand = await this.repository.remove(id)
    return deleteBrand
  }

  async createLogo (id, file) {
    const logo = await this.isExist(id, 'logo not found')
    const folder = 'brands/'
    const url = await StorageService.uploadImage(file, folder)
    if (logo?.images) await StorageService.deleteImage(logo.images)
    const updatedLogo= await this.repository.update(id, { images: url })
    return updatedLogo[1][0]
  }
}

module.exports = BrandService
