
const Auth = require('../models/auth.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { StatusCode } = require('status-code-enum')

const JSONAPIResponse = require('../helpers/jsonResponse.js')

const register = async (req, res) => {

    try {

        const { username, email, password } = req.body
        const user = await Auth.findOne({ email })

        if (user)
            return JSONAPIResponse.error(res, "This user already exists", StatusCode.SuccessOK)

        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = await Auth.create({ username, email, password: passwordHash })
        const userToken = jwt.sign({ id: newUser }, process.env.SECRET_TOKEN, { expiresIn: '1h' })

        return JSONAPIResponse.success(res, {
            "user": newUser,
            "token": userToken
        },
            StatusCode.SuccessCreated
        )


    } catch (error) {

        if (error)
            return JSONAPIResponse.error(res, "There is an error")

    }
}


const login = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await Auth.findOne({ email })

        if (!user) {
            return JSONAPIResponse.error(res, "No such user found")
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return JSONAPIResponse.error(res, "Wrong credentials")
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })

        return JSONAPIResponse.success(res, {
            "user": user,
            "token": token
        })



    } catch (error) {
        if (error)
            return JSONAPIResponse.error(res, "There is an error")
    }
}


module.exports = { register, login }