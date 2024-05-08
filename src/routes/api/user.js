const router = require('express').Router()
const userController = require('../../controllers/user')

router.get('/', userController.index)

module.exports = router
