
const Auth = require('../models/auth.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { StatusCode } = require('status-code-enum')


const register = async function (data) {

    try {

        const { username, email, password } = data
        const user = await Auth.findOne({ email })

        if (user)

            return {
                "data": {
                    "message": "This user already exist",
                },
                "statusCode": StatusCode.ClientErrorConflict,
                "success" : false
            }

        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = await Auth.create({ username, email, password: passwordHash })
        const userToken = jwt.sign({ id: newUser }, process.env.SECRET_TOKEN, { expiresIn: '1h' })


        return {
            "data": {
                "user": newUser,
                "token": userToken
            }
        }


    } catch (err) {

        console.log(err);
        throw err
    }

}


const login = async function (data) {

    try {

        const { email, password } = data
        
        const user = await Auth.findOne({ email })

        if (!user) 
            return {
                "data": {
                    "message": "No user found",
                },
                "statusCode": StatusCode.ClientErrorNotFound,
                "success" : false
            }
        

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword)
           
            return {
                "data": {
                    "message": "Wrong credentials",
                },
                "statusCode": StatusCode.ClientErrorUnauthorized,
                "success" : false
            }
        

        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })

        return {
            "data": {
                "user": user,
                "token": token
            }
        }


    } catch (err) {

        console.log(err);
        throw err
    }



}





module.exports = { register, login }