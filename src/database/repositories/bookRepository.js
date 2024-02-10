const { APIError, STATUS_CODES } = require("../../utils/appErrors");
const { BookModel } = require("../models");

class BookRepository {
    async books() {
        try {
            return await BookModel.find();
        } catch (error) {
            console.log(error);
        }
    }

    async book(bookId) {
        try {
            return await BookModel.findById(bookId);
        } catch (error) {
            throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, error.message);
        }
    }

    async addBook(book) {
        try {
            return await BookModel.create(book);
        } catch (error) {
            console.log(error);
        }
    }

    async updateBook(searchTitle, book) {
        try {
            return BookModel.findOneAndUpdate({ title: searchTitle }, book, { new: true });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteBook(title) {
        try {
            return BookModel.findOneAndDelete({ title });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BookRepository;
