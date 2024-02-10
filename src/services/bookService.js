const BookRepository = require("../database/repositories/bookRepository");
const { APIError } = require("../utils/appErrors");
const { getValidations, postValidations } = require("../utils/validations");

class BookService {
    constructor() {
        this.repository = new BookRepository();
    }

    async getBooks() {
        try {
            const books = await this.repository.books();
            return getValidations(books);
        } catch (error) {
            throw new APIError("Data not found");
        }
    }

    async getBook(bookId) {
        try {
            const book = await this.repository.book(bookId);
            return getValidations(book, bookId);
        } catch (error) {
            throw new APIError("Data not found");
        }
    }

    async addNewBook(book) {
        try {
            const newBook = await this.repository.addBook(book);
            return postValidations(book, newBook);
        } catch (error) {
            throw new APIError(error.message, 500, error.description);
        }
    }

    async updateBook(searchTitle, book) {
        try {
            const updatedBook = await this.repository.updateBook(searchTitle, book);
            return updatedBook;
        } catch (error) {
            throw new APIError("Data not found");
        }
    }

    async deleteBook(title) {
        try {
            const deletedBook = await this.repository.deleteBook(title);
            return deletedBook;
        } catch (error) {
            throw new APIError("Data not found");
        }
    }
}

module.exports = BookService;
