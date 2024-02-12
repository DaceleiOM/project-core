const Manager = require('../database/models/manager')
const Repository = require('./repository')

class ManagerRepository extends Repository {
  constructor () {
    super()
    this.model = Manager
  }
}

module.exports = ManagerRepository
