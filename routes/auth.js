const express = require('express')

const {register,login} = require('../controllers/authController')


const { loginValidationRules,registerValidationRules } = require('../validations/auth.validation')
 
const { validate } = require('../middlewares/validation.middleware')


const router = express.Router()




router.post('/register',registerValidationRules(),validate,register)
router.post('/login',loginValidationRules(), validate,login)


module.exports = router