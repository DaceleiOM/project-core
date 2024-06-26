const Controller = require('../decorators/controller')
const ProductService = require('../services/product_service')
const db = require('../config/firebase');

class ProductController {
  constructor () {
    this.service = new ProductService()
  }

  async create (req) {
    const data = req.body
    const product = await this.service.create(data)
    return [product, 'The new product was created']
  }

  async update (req) {
    const id = req.params.id
    const data = req.body
    const product = await this.service.update(id, data)
    return [product, 'Update product was succesfull']
  }

  async delete (req) {
    const id = req.params.id
    const product = await this.service.delete(id)
    return [product, 'Delete product was succesfull']
  }

  async createImage (req) {
    const id = req.params.id
    const file = req.files[0]
    const productImage = await this.service.createImage(id, file)
    return [productImage, 'the image uploaded successfully']
  }
  
  async getById (req){
    const id = req.params.id
    const product = await this.service.getById(id)
    return [product, 'product was succesfull']

  }
  
} 

const productController = new ProductController()
const controller = new Controller(productController)

module.exports = controller
