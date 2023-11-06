
const { body } = require('express-validator')



const loginValidationRules = () => {
    return [
      body('email').isEmail(),
      body('password').isLength({ min: 5 }),
    ]
  }

  const registerValidationRules = () => {
    return [
      body('username').isString(),
      body('email').isEmail(),
      body('password').isLength({ min: 5 }),
    ]
  }


  module.exports = {
    loginValidationRules,
    registerValidationRules
  }
  