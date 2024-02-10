const { STATUS_CODES, APIError } = require("../../utils/appErrors");
const { BookModel } = require("../models");

class BookRepository {
    async books() {
        try {
            return await BookModel.find();
        } catch (error) {
            throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Failed to retrieve books");
        }
    }

    async book(bookId) {
        try {
            return await BookModel.findById(bookId);
        } catch (error) {
            throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Failed to retrieve book");
        }
    }

    async addBook(book) {
        try {
            return await BookModel.create(book);
        } catch (error) {
            throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Failed to add book");
        }
    }

    async updateBook(searchTitle, book) {
        try {
            return BookModel.findOneAndUpdate({ title: searchTitle }, book, { new: true });
        } catch (error) {
            throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Failed to update book");
        }
    }

    async deleteBook(title) {
        try {
            return BookModel.findOneAndDelete({ title });
        } catch (error) {
            throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Failed to delete book");
        }
    }
}

module.exports = BookRepository;
