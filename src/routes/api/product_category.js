const router = require('express').Router()
const productCategoryController = require('../../controllers/product_category')

const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')

router.get(
    '/by-brand/:BrandId',
    productCategoryController.getByBrand
)


router.post(
    '/create', 
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    productCategoryController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    productCategoryController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    productCategoryController.delete
)

router.get(
    '/product-by-brandid/:brandId',
    productCategoryController.getProductsByBrand
)

router.get(
    '/product-by-category/:brandCategoryId',
    productCategoryController.getProductsByCategory
)


module.exports = router
