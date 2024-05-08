const router = require('express').Router()
const AuthController = require('../../controllers/auth')

router.post(
  '/user/register',
  AuthController.userRegister
)

router.post(
  '/user/login',
  AuthController.userLogin
)


module.exports = router