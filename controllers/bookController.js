
const { StatusCode } = require('status-code-enum')
const BookService = require('../Services/BookService');
const { log } = require('console');



const getAll = async function (req, res) {

 try {

    const books = await BookService.getAll()
    res.status(StatusCode.SuccessOK).json({ data: books })
    
 } catch (error) {
    console.log(error);
    res.status(StatusCode.ServerErrorInternal)
 }
    
   
  
}

const create = async function (req, res) {

  try {
 
    const book = await BookService.create(req.body)
    
    res.status(StatusCode.SuccessCreated).json({ data: book })
    
 } catch (error) {
    
    console.log(error);
    res.status(StatusCode.ServerErrorInternal)
 }


}

const bookById = async (req, res) => {
  
  try {
    
    const book = await BookService.bookById(req.params.id)

    if (!book) {
      res.status(StatusCode.SuccessNoContent).json({ data: [] })
    }

    res.status(StatusCode.SuccessOK).json({ data: book })

  } catch (error) {
    
    console.error(error);

    res.status(StatusCode.ServerErrorInternal)
  }
};


module.exports = {getAll,create,bookById}