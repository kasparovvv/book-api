
const Book = require('../models/book.js')
var Fakerator = require("fakerator");
const { StatusCode } = require('status-code-enum')


const getAll = async function (req, res) {

 try {

    const books = await Book.find()
    res.status(StatusCode.SuccessOK).json({ data: books })
    
 } catch (error) {
    console.log(err);
    res.status(StatusCode.ServerErrorInternal)
 }
    
   

  
}

const create = async function (req, res) {


  try {
 
    var fakerator = Fakerator();

    var randomBook = new Book(
        { 
            name: fakerator.names.name(), 
            price: fakerator.random.number(100), 
            quantity: fakerator.random.number(100) 
        }
    );

    const book = await randomBook.save()
    
    res.status(StatusCode.SuccessCreated).json({ data: book })
    
 } catch (error) {
    console.log(err);
    res.status(StatusCode.ServerErrorInternal)
 }


}

const bookById = async (req, res) => {
  
  try {
    
    const id = req.params.id;
    
    const book = await Book.findById(id);

    if (!book) {
      res.status(StatusCode.SuccessNoContent).json({ data: [] })
    }

    res.status(StatusCode.SuccessOK).json({ data: BOOK })

  } catch (err) {
    
    console.error(err);

    res.status(StatusCode.ServerErrorInternal)
  }
};


module.exports = {getAll,create,bookById}