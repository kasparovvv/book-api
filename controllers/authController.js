
const Auth = require('../models/auth.js')
const { StatusCode } = require('status-code-enum')

const AuthService = require('../Services/AuthService');

const JSONAPIResponse = require('../helpers/jsonResponse.js')

const register = async (req, res) => {

    try {

        const user = await AuthService.register(req.body)

        return JSONAPIResponse.success(res, user.data, user.statusCode,user.success)


    } catch (err) {

        if (err)
            return JSONAPIResponse.error(res, err.message)

    }
}


const login = async (req, res) => {

    try {

        const user = await AuthService.login(req.body)

        return JSONAPIResponse.success(res, user.data, user.statusCode,user.success)

    } catch (error) {
        if (error)
            return JSONAPIResponse.error(res, "There is an error")
    }
}


module.exports = { register, login }