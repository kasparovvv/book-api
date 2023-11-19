
const { StatusCode } = require('status-code-enum')
const BookService = require('../Services/BookService');
const JSONAPIResponse = require('../helpers/jsonResponse.js')

const { log } = require('console');



const getAll = async function (req, res) {

  try {

    const books = await BookService.getAll()

    return JSONAPIResponse.success(res, books)

  } catch (err) {

    //  TODO LOG

    if (err)
      return JSONAPIResponse.error(res, err.message)


  }



}

const create = async function (req, res) {

  try {

    const book = await BookService.create(req.body)

    return JSONAPIResponse.success(res, book,StatusCode.SuccessCreated)


  } catch (err) {
      //  TODO LOG
    if (err)
      return JSONAPIResponse.error(res, err.message)
  }


}

const bookById = async (req, res) => {

  try {

    const book = await BookService.bookById(req.params.id)

    if (!book) 
      return JSONAPIResponse.success(res,[],StatusCode.ClientErrorNotFound,false)

    return JSONAPIResponse.success(res, book)


  } catch (err) {

    //  TODO LOG
    if (err)
      return JSONAPIResponse.error(res, err.message)
  
    }

};


module.exports = { getAll, create, bookById }