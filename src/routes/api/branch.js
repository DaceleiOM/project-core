const router = require('express').Router()
const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')
const branchController = require('../../controllers/branch')

router.post(
    '/create', 
    authenticate,
    checkRoles(['ADMIN']),
    branchController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['ADMIN']),
    branchController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['ADMIN']),
    branchController.delete
)

module.exports = router
