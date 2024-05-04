const Service = require('./service')
const ProductCategoryRepository = require('../repositories/product_category_repository')
const sequelize = require('../database/connection')
const Sequelize = require('sequelize');
const Product = require('../database/models/product')

class ProductCategoryService extends Service {
  constructor () {
    super(new ProductCategoryRepository())
    this.repository = new ProductCategoryRepository()
  }

  async create (data) {
    const relation = await this.repository.create(data)
    if (!relation) throw new NotFoundError('relation doesnt exist')
    return relation
  }

  async update (id, data) {
    const relation = await this.repository.getById(id)
    if (!relation) throw new NotFoundError('relation not found')
    const updateRelation = await this.repository.update(id, data)
    return updateRelation[1][0]
  }

  async delete (id) {
    const relation = await this.repository.getById(id)
    if (!relation) { throw new Error('relation not found') }
    const deleteRelation = await this.repository.remove(id)
    return deleteRelation
  }

  async getProductsByBrand(brandId) {
    try {
      const productIds = await sequelize.query(
        `SELECT product_id
         FROM product_categories
         WHERE brand_category_id IN (
             SELECT id
             FROM brand_categories
             WHERE brand_id = :brandId
         )`,
        {
          replacements: { brandId },
          type: Sequelize.QueryTypes.SELECT
        }
      );
      const ids = productIds.map((row) => row.product_id);

      const products = await Product.findAll({
        where: { id: ids }
      });

      return products;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  }

  async getProductsByCategory (brandCategoryId){
    const productIds = await this.repository.get({
      where: {
        brand_category_id: brandCategoryId
      }
    });
    const ids = productIds.map((row) => row.product_id);

    const products = await Product.findAll({
      where: { id: ids }
    });
    return products
  }

}

module.exports = ProductCategoryService
