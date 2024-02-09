const BookRepository = require("../database/repositories/bookRepository");

class BookService {
    constructor() {
        this.repository = new BookRepository();
    }

    async getBooks() {
        try {
            const books = await this.repository.books();
            return books;
        } catch (error) {
            console.log(error);
        }
    }

    async getBook(title) {
        try {
            const book = await this.repository.book(title);
            return book;
        } catch (error) {
            console.log(error);
        }
    }

    async addNewBook(book) {
        try {
            const newBook = await this.repository.addBook(book);
            return newBook;
        } catch (error) {
            console.log(error);
        }
    }

    async updateBook(searchTitle, book) {
        try {
            const updatedBook = await this.repository.updateBook(searchTitle, book);
            return updatedBook;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteBook(title) {
        try {
            const deletedBook = await this.repository.deleteBook(title);
            return deletedBook;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BookService;
