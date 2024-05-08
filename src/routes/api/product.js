const router = require('express').Router()
const productController = require('../../controllers/product')
const authenticate = require('../../middlewares/authenticate')
const multipartFormDataParser = require('../../middlewares/multipart_form_data_parser')
const checkRoles = require('../../middlewares/check_roles')

router.post(
    '/create', 
    authenticate,
    checkRoles(['Root', 'Admin']),
    productController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    productController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    productController.delete
)

router.post(
    '/create-image/:id',
    authenticate,
    checkRoles(['Manager', 'Admin', 'Root']),
    multipartFormDataParser.any(),
    productController.createImage
)

router.get(
    '/get-by-id/:id',
    productController.getById
)

module.exports = router
