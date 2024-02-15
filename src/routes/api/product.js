const router = require('express').Router()
const productController = require('../../controllers/product')
const authenticate = require('../../middlewares/authenticate')
const multipartFormDataParser = require('../../middlewares/multipart_form_data_parser')
const checkRoles = require('../../middlewares/check_roles')

router.post(
    '/create', 
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    productController.create
)

router.put(
    '/edit/:id', 
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    productController.update
)

router.delete(
    '/delete/:id',
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    productController.delete
)

router.post(
    '/create-image/:id',
    authenticate,
    checkRoles(['MANAGER', 'ADMIN']),
    multipartFormDataParser.any(),
    productController.createImage
)

module.exports = router
