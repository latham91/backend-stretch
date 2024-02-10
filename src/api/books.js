const BookService = require("../services/bookService");

module.exports = (app) => {
    const bookService = new BookService();

    // Get all books
    app.get("/books", async (req, res, next) => {
        try {
            const books = await bookService.getBooks();
            return res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    });

    // Get a single book by id
    app.get("/books/:bookId", async (req, res, next) => {
        try {
            const { bookId } = req.params;
            const book = await bookService.getBook(bookId);
            return res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    });

    // Add a new book
    app.post("/books", async (req, res, next) => {
        try {
            const book = await bookService.addNewBook(req.body);
            return res.status(200).json({ success: true, count: book.length, data: book });
        } catch (error) {
            next(error);
        }
    });

    // Update a book using the books title
    app.patch("/books", async (req, res, next) => {
        try {
            const updatedBook = {
                title: req.body.title,
                author: req.body.author,
            };

            const book = await bookService.updateBook(req.body.searchTitle, updatedBook);
            return res.status(200).json({ success: true, data: book });
        } catch (error) {
            next(error);
        }
    });

    // Delete a book using the books title
    app.delete("/books", async (req, res, next) => {
        try {
            const book = await bookService.deleteBook(title);
            return res.status(200).json({ success: true, data: {} });
        } catch (error) {
            next(error);
        }
    });
};
