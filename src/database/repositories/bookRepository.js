const { APIError } = require("../../utils/appErrors");
const { BookModel } = require("../models");

class BookRepository {
    async books() {
        try {
            return await BookModel.find();
        } catch (error) {
            throw new APIError("API Error", 500, error.message);
        }
    }

    async book(bookId) {
        try {
            return await BookModel.findById(bookId);
        } catch (error) {
            throw new APIError("API Error", 500, error.message);
        }
    }

    async addBook(book) {
        try {
            return await BookModel.create(book);
        } catch (error) {
            throw new APIError("API Error", 500, error.message);
        }
    }

    async updateBook(bookId, book) {
        try {
            return BookModel.findByIdAndUpdate(bookId, book, { new: true });
        } catch (error) {
            throw new APIError("API Error", 500, error.message);
        }
    }

    async deleteBook(bookId) {
        try {
            return BookModel.findByIdAndDelete(bookId);
        } catch (error) {
            throw new APIError("API Error", 500, error.message);
        }
    }
}

module.exports = BookRepository;
