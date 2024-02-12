const router = require('express').Router()
const productCategoryController = require('../../controllers/product_category')

const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')

router.post(
    '/create', 
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    productCategoryController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    productCategoryController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    productCategoryController.delete
)

module.exports = router
