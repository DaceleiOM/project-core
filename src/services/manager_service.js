const Service = require('./service')
const ManagerRepository = require('../repositories/manager_repository')

const bcrypt = require('bcryptjs')
const tokenize = require('../helpers/tokenize')
const { http, responseCode, error, validator } = require('../helpers/request')

const Manager = require('../database/models/manager')

class ManagerService extends Service {
  constructor () {
    super(new ManagerRepository())
    this.repository = new ManagerRepository()
  }

  static async create (data) {
    const manager = await Manager.create(data)
    return http.response(manager, responseCode.OK, 'Nuevo manager creado con éxito')
  }

  static async login (data) {
    const manager = await Manager.findOne({ where: { email: data.email } })

    if (!manager || !manager.email || !bcrypt.compareSync(data.password, manager.password)) {
      return http.error(null, responseCode.NOT_AUTHORIZED, ['El correo y la contraseña no coinciden'])
    }
    
    delete manager.dataValues.password
    const token = tokenize.create(manager.id, 'MANAGER')
    return http.response({ data: { ...manager.dataValues, is_manager: true }, token }, responseCode.OK, 'Autenticación exitosa')
  }
}

module.exports = ManagerService
