const Service = require('./service')
const BranchRepository = require('../repositories/branch_repository')

class BranchService extends Service {
  constructor () {
    super(new BranchRepository())
    this.repository = new BranchRepository()
  }
  async getByBrand(BrandId) {
    return await this.repository.get({
      where: {
        brand_id: BrandId
      }
    });
  }

  async create (data) {
    const branch = await this.repository.create(data)
    if (!branch) throw new NotFoundError('branch doesnt exist')
    return branch
  }

  async update (id, data) {
    const branch = await this.repository.getById(id)
    if (!branch) throw new NotFoundError('branch not found')
    const updateBranch = await this.repository.update(id, data)
    return updateBranch[1][0]
  }

  async delete (id) {
    const branch = await this.repository.getById(id)
    if (!branch) { throw new Error('branch not found') }
    const deleteBranch = await this.repository.remove(id)
    return deleteBranch
  }
}

module.exports = BranchService
