exports.booksValidation = (data, bookId) => {
    if (!data && !bookId) {
        return { success: false, message: `No books found` };
    }

    if (!data && bookId) {
        return { success: false, message: `No book found with id: ${bookId}` };
    }

    return { success: true, count: data.length, data };
};
