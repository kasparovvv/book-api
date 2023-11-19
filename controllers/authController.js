
const Auth = require('../models/auth.js')
const { StatusCode } = require('status-code-enum')
const AuthService = require('../Services/AuthService');
const JSONAPIResponse = require('../utilities/jsonResponse.js')
const logger = require('../utilities/logger.js')

const register = async (req, res) => {

    try {

        const user = await AuthService.register(req.body)

        return JSONAPIResponse.success(res, user.data, user.statusCode, user.success)


    } catch (err) {

        if (err) {
            logger.log("error", err.message)
            return JSONAPIResponse.error(res)
        }


    }
}


const login = async (req, res) => {

    try {

        const user = await AuthService.login(req.bodys)

        return JSONAPIResponse.success(res, user.data, user.statusCode, user.success)

    } catch (err) {

        if (err) {
            logger.log("error", err.message)
            return JSONAPIResponse.error(res)
        }

    }
}


module.exports = { register, login }