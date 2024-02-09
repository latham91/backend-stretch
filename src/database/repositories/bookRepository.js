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
