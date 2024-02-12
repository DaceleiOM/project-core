const jwt = require('jwt-simple')
const dayjs = require('dayjs')
const { responseCode, error } = require('../helpers/request')
const Admin = require('../database/models/admin')
const Manager = require('../database/models/manager')
const Branch = require('../database/models/branch') // Modificado el nombre del modelo
const Brand = require('../database/models/brand')

module.exports = async (req, res, next) => {
  try {
    let user = null

    if (!req.headers.authorization) {
      return res.status(responseCode.NOT_AUTHORIZED).send(error.authorizationHeaderDoesntExist)
    }

    const bearer = req.headers.authorization.split(' ')[0]

    if (bearer !== 'Bearer') {
      return res.status(responseCode.NOT_AUTHORIZED).send({
        data: null,
        message: null,
        errors: ['No autorizado. La estructura del token recibido es inválida'],
        code: responseCode.NOT_AUTHORIZED
      })
    }

    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.decode(token, process.env.TOKEN_SECRET_KEY)

    if (payload.exp <= dayjs().unix()) {
      return res.status(responseCode.NOT_AUTHORIZED).json(error.expiredToken)
    }

    switch (payload.sub.user_type) {
      case 'ADMIN':
        user = await Admin.findByPk(payload.sub.user_id)
        break
      case 'MANAGER':
        user = await Manager.findByPk(payload.sub.user_id, {
          include: {
            model: Branch,
            as: 'branch',
            attributes: ['brand_id']
          }
        })

        if (user.dataValues.token !== token) {
          user = null
        }

        break
      default:
        user = null
    }

    if (!user) {
      throw new Error('Invalid token')
    }

    req.user = user.dataValues
    req.userId = payload.sub.user_id
    req.userType = payload.sub.user_type
    req.isAdmin = payload.sub.user_type === 'ADMIN'
    req.token = token
    next()
  } catch (e) {
    return res.status(responseCode.NOT_AUTHORIZED).send(error.invalidToken)
  }
}
