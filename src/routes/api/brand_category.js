const router = require('express').Router()
const brandCategoryController = require('../../controllers/brand_category')

const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')

router.post(
    '/create', 
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    brandCategoryController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    brandCategoryController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    brandCategoryController.delete
)


router.get(
    '/get-by-brandId/:BrandId',
    brandCategoryController.getByBrand

)
module.exports = router
