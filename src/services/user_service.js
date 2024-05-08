const { http, responseCode} = require('../helpers/request')
const tokenize = require('../helpers/tokenize')
const bcrypt = require('bcryptjs')

const Service = require('./service')

const User = require('../database/models/user')
const UserRepository = require('../repositories/user_repository')

class UserService extends Service {
  constructor () {
    super(new UserRepository())
    this.repository = new UserRepository()
  }

  // Create/register user-------------------------------------------------------------------------------------------------
  static async create (data) {
    const admin = await User.create(data)
    return http.response(admin, responseCode.OK, 'Nuevo user creado con éxito')
  }
  
  // Login user-------------------------------------------------------------------------------------------------

  static async login (data) {
    const user = await User.findOne({ where: { email: data.email } })

    if (!user || !user.email || !bcrypt.compareSync(data.password, user.password)) {
      return http.error(null, responseCode.NOT_AUTHORIZED, ['El correo y la contraseña no coinciden'])
    }
    delete user.dataValues.password

    let roles = user.dataValues.rol || [];
    
    if (typeof roles === 'string') {
      try {
        roles = JSON.parse(roles);
      } catch (error) {
        console.error('Error al analizar JSON:', error);
        roles = [];
      }
    }

    const token = tokenize.create(user.id, roles);
    
    return http.response({ data: { ...user.dataValues, roles }, token }, responseCode.OK, 'Autenticación exitosa');
  }

}

module.exports = UserService
