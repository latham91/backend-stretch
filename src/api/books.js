const BookService = require("../services/bookService");

module.exports = (app) => {
    const bookService = new BookService();

    // Get all books and get a book by title
    app.get("/books", async (req, res, next) => {
        const { title } = req.body;
        try {
            if (!title) {
                const books = await bookService.getBooks();
                return res.status(200).json({ success: true, count: books.length, data: books });
            }

            const book = await bookService.getBook(title);

            if (!book) {
                return res.status(404).json({ success: false, message: "Book not found" });
            }

            return res.status(200).json({ success: true, data: book });
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
        const { searchTitle, title, author } = req.body;

        if (!searchTitle) {
            return res.status(400).json({ success: false, message: "Please provide a title to update" });
        }

        if (!title && !author) {
            return res.status(400).json({ success: false, message: "Please provide a title or author to update" });
        }

        try {
            const updatedBook = {
                title,
                author,
            };
            const book = await bookService.updateBook(req.body.searchTitle, updatedBook);

            if (!book) {
                return res.status(404).json({ success: false, message: "Book not found" });
            }

            return res.status(200).json({ success: true, data: book });
        } catch (error) {
            next(error);
        }
    });

    // Delete a book using the books title
    app.delete("/books", async (req, res, next) => {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, message: "Please provide a title to delete" });
        }

        try {
            const book = await bookService.deleteBook(title);

            if (!book) {
                return res.status(404).json({ success: false, message: "Book not found" });
            }

            return res.status(200).json({ success: true, data: {} });
        } catch (error) {
            next(error);
        }
    });
};
