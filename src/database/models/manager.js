const bcrypt = require('bcryptjs')
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Manager extends Model {}

Manager.init({
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
  branch_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'managers',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Manager;
