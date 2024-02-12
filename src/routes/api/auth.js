const router = require('express').Router()
const AuthController = require('../../controllers/auth')
const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')

router.post(
  '/admin/register',
  AuthController.adminRegister
)

router.post(
  '/admin/login',
  AuthController.adminLogin
)

router.post(
  '/manager/register',
  authenticate,
  checkRoles(['ADMIN']),
  AuthController.managerRegister
)

router.post(
  '/manager/login',
  AuthController.managerLogin
)


module.exports = router