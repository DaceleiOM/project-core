const Branch = require('../database/models/branch')
const Repository = require('./repository')

class BranchRepository extends Repository {
  constructor () {
    super()
    this.model = Branch
  }
}

module.exports = BranchRepository
