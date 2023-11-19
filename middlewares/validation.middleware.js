const { validationResult } = require('express-validator')
const { StatusCode } = require('status-code-enum')
const JSONAPIResponse = require('../utilities/jsonResponse.js')



const validate = (req, res, next) => {

    const errors = validationResult(req)

    if (errors.isEmpty())
        return next()

    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))

    return JSONAPIResponse.error(res,extractedErrors,StatusCode.ClientErrorUnprocessableEntity)

}

module.exports = {
    validate,
}
