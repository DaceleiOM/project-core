const router = require('express').Router()
const authRouter = require('./api/auth')
const brandRouter = require('./api/brand')
const branchRouter = require('./api/branch')
const brandCategoryRouter = require('./api/brand_category')
const productRouter = require('./api/product')
const productCategoryRouter = require('./api/product_category')
const userRouter = require('./api/user')

router.use('/auth', authRouter)
router.use('/brand', brandRouter)
router.use('/branch', branchRouter)
router.use('/brand-category', brandCategoryRouter)
router.use('/product', productRouter)
router.use('/product-category', productCategoryRouter)
router.use('/user', userRouter)

router.get('/', (req, res) => {
    res.json(http.response(null, responseCode.OK, 'Welcome to Adomi!'))

})
  

module.exports = router
