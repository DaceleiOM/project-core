const bcrypt = require('bcryptjs')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Admin extends Model { }

Admin.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    set (value) {
      this.setDataValue('email', value?.trim())
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    set (value) {
      this.setDataValue('password', value ? bcrypt.hashSync(value, 12) : null)
    }
  },
  brand_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'admins',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

module.exports = Admin
