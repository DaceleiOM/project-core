const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class BrandCategory extends Model {}

BrandCategory.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  brand_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'brand_categories',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = BrandCategory;
