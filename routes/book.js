const express = require('express')

const {getAll,create,bookById} = require('../controllers/bookController')

const authenticateJWT = require('../middlewares/auth.middleware')

const router = express.Router()


router.get('/',authenticateJWT,getAll)
router.get('/add-random',authenticateJWT,create)
router.get('/book/:id',authenticateJWT,bookById)

module.exports = router