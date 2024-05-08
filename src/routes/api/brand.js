const router = require('express').Router()
const brandController = require('../../controllers/brand')
const multipartFormDataParser = require('../../middlewares/multipart_form_data_parser')
const authenticate = require('../../middlewares/authenticate')
const checkRoles = require('../../middlewares/check_roles')

router.post(
    '/create',
    authenticate,
    checkRoles(['Root']),
    brandController.create
)

router.put(
    '/edit/:id', 
    checkRoles(['Root']),
    brandController.update
)

router.delete(
    '/delete/:id',
    checkRoles(['Root']),
    brandController.delete
)

router.get(
    '/getall',
    brandController.getAll
)

router.get(
    '/getById/:id',
    brandController.getById
)

router.post(
    '/create-logo/:id',
    checkRoles(['Root']),
    multipartFormDataParser.any(),
    brandController.createLogo
)

module.exports = router
