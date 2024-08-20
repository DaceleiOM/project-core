const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Branch extends Model {}

Branch.init({
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
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  brand_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'branches',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Branch;
