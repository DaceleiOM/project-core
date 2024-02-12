const router = require('express').Router()
const adminRouter = require('./api/admin')
const authRouter = require('./api/auth')
const brandRouter = require('./api/brand')
const branchRouter = require('./api/branch')
const managerRouter = require('./api/manager')

router.use('/admin', adminRouter)
router.use('/auth', authRouter)
router.use('/brand', brandRouter)
router.use('/branch', branchRouter)
router.use('/manager', managerRouter)

router.get('/', (req, res) => {
    res.json(http.response(null, responseCode.OK, 'Welcome to Adomi!'))

})
  

module.exports = router
