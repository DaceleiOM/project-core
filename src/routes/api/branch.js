const router = require('express').Router()
const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')
const branchController = require('../../controllers/branch')


router.get(
    '/by-brand/:BrandId',
    branchController.getByBrand
)

router.post(
    '/create', 
    authenticate,
    checkRoles(['Admin', 'Root']),
    branchController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['Admin', 'Root']),
    branchController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['Admin', 'Root']),
    branchController.delete
)

module.exports = router
