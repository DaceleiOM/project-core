// users.model.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcryptjs')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
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
        allowNull: true,
    },
    brand_id: {
        type: DataTypes.UUID,
        allowNull: true,
    },
    rol: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {},
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    }, {
    sequelize,
    modelName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = User;
