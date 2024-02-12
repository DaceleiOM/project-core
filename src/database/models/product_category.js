const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class ProductCategory extends Model {}

ProductCategory.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  product_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  brand_category_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'product_categories',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = ProductCategory;
