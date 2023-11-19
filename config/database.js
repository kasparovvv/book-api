const mongoose = require('mongoose')

const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/?authSource=admin`


const db = () =>{
    mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
        console.log("DB Connected!");
    }).catch((err) => {
        console.log(err);
        throw err
    })
}


module.exports = db