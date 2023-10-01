const mongoose = require('mongoose');


const BookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
       
    },
    
});





module.exports = mongoose.model('books',BookSchema)