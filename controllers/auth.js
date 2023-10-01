
const Auth = require('../models/auth.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async(req,res) => {
    
    try {
       
        const {username,email,password} = req.body
        const user = await Auth.findOne({email})

        
        if(user){
            return res.status(500).json({message:"var zaten"})
        }

        const passwordHash = await bcrypt.hash(password,12)
        const newUser = await Auth.create({username,email,password:passwordHash})
        const userToken= jwt.sign({id:newUser},process.env.SECRET_TOKEN,{expiresIn:'1h'})
        
       return res.status(201).json({
            status:"OK",
            newUser,
            userToken
        })

    } catch (error) {
        return res.status(500)
    }
}


const login = async(req,res) => {
    
    try {
       
        const {email,password} = req.body
        const user = await Auth.findOne({email})

        if(!user){
            return res.status(500).json({message:"Böyle bir kullanıcı bulunamadı"})
        }

        const comparePassword = await bcrypt.compare(password,user.password)
        
        if(!comparePassword){
            return res.status(500).json({message:"Parola yanlış"})
        }
        
        const token =  jwt.sign({id:user.id},process.env.SECRET_TOKEN,{expiresIn:'1h'})
        
       return res.status(201).json({
            status:"OK",
            user,
            token
        })

    } catch (error) {
        return res.status(500)
    }
}


module.exports = {register,login}