const express = require('express')


const authRouter = require('../routes/auth')
const bookRouter = require('../routes/book')


const router = express.Router()

router.use('/auth/',authRouter)
router.use('/books/',bookRouter)



module.exports = router