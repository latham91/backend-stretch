const BookService = require("../services/bookService");

module.exports = (app) => {
    const bookService = new BookService();

    // Get all books
    app.get("/books", async (req, res, next) => {
        const { title } = req.body;
        try {
            if (!title) {
                const books = await bookService.getBooks();
                return res.status(200).json({ success: false, count: books.length, data: books });
            }

            const book = await bookService.getBook(title);
            return res.status(200).json({ success: false, data: book });
        } catch (error) {
            console.log(error);
        }
    });

    // Add a new book
    app.post("/books", async (req, res, next) => {
        try {
            const book = await bookService.addNewBook(req.body);
            return res.status(200).json({ success: false, count: book.length, data: book });
        } catch (error) {
            console.log(error);
        }
    });
};
