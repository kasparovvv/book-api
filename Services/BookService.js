
const Book = require('../models/book.js')


const getAll = async function () {

    try {
   
       return await Book.find()
       
    } catch (error) {
       console.log(err);
       throw error
    }
       
      
     
   }
   
const create = async function (data) {

    try {

    const {name,price,quantity} = data

    var newBook = new Book(
        { 
            name: name, 
            price: price, 
            quantity:quantity 
        }
    );

    return  await newBook.save()
    
    
} catch (error) {
    
    console.log(err);
    throw error
    
}


}

const bookById = async (id) => {
    
    try {
    
        return await Book.findById(id);

    } catch (error) {
    
    console.log(error);

    throw error
    }
};



module.exports = {getAll,create,bookById}