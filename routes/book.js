const express = require('express')

const {getAll,create,bookById} = require('../controllers/bookController')

const authenticateJWT = require('../middlewares/auth.middleware')


const { check, validationResult } = require('express-validator');


const router = express.Router()


router.get('/',authenticateJWT,getAll)

router.get('/add-book',[
    
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6, max: 30 }).withMessage('Password must be between 6 and 30 characters')
  ],create)


  router.get('/book/:id',authenticateJWT,bookById)

module.exports = router