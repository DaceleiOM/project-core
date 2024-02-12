const router = require('express').Router()
const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')
const managerController = require('../../controllers/manager')


router.post(
    '/create', 
    authenticate,
    checkRoles(['ADMIN']),
    managerController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['ADMIN']),
    managerController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['ADMIN']),
    managerController.delete
)

module.exports = router
