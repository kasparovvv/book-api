
const Book = require('../models/book.js')


const getAll = async function () {

    try {

        return await Book.find()

    } catch (err) {

        console.log(err);
        throw err
    }



}

const create = async function (data) {

    try {

        const { name, price, quantity } = data

        var newBook = new Book(
            {
                name: name,
                price: price,
                quantity: quantity
            }
        );

        return await newBook.save()


    } catch (err) {

        console.log(err);
        throw err

    }


}

const bookById = async (id) => {

    try {

        return await Book.findById(id);

    } catch (err) {

        console.log(err);
        throw err
    }
};



module.exports = { getAll, create, bookById }