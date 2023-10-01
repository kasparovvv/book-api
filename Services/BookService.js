
const Book = require('../models/book.js')
var Fakerator = require("fakerator");

const getAll = async function () {

    try {
   
       return await Book.find()
     
       
    } catch (error) {
       console.log(err);
       throw error
    }
       
      
     
   }
   
const create = async function () {


    try {

    var fakerator = Fakerator();

    var randomBook = new Book(
        { 
            name: fakerator.names.name(), 
            price: fakerator.random.number(100), 
            quantity: fakerator.random.number(100) 
        }
    );

    return  await randomBook.save()
    
    
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