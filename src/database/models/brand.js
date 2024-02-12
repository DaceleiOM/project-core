const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Brand extends Model { }

Brand.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'brands',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

module.exports = Brand
