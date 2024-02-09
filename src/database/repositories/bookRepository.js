const { BookModel } = require("../models");

class BookRepository {
    async books() {
        try {
            return await BookModel.find();
        } catch (error) {
            console.log(error);
        }
    }

    async book(title) {
        try {
            return await BookModel.findOne({ title });
        } catch (error) {
            console.log(error);
        }
    }

    async addBook(book) {
        try {
            return await BookModel.create(book);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BookRepository;
