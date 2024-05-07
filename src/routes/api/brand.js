const router = require('express').Router()
const brandController = require('../../controllers/brand')
const multipartFormDataParser = require('../../middlewares/multipart_form_data_parser')

router.post(
    '/create', 
    brandController.create
)

router.put(
    '/edit/:id', 
    brandController.update
)

router.delete(
    '/delete/:id',
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
    multipartFormDataParser.any(),
    brandController.createLogo
)

module.exports = router
