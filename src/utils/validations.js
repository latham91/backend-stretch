// Basic validation for books

exports.getValidations = (data, bookId) => {
    if (!data && !bookId) {
        return { success: false, message: `no books found` };
    }

    if (!data && bookId) {
        return { success: false, message: `no book found with id: ${bookId}` };
    }

    return { success: true, count: data.length, data };
};

exports.postValidations = (req, data) => {
    if (!req.title) {
        return { success: false, message: `title is a required field` };
    }

    return { success: true, count: data.length, data };
};
