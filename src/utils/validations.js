exports.booksValidation = (data) => {
    if (!data) {
        return { success: false, message: "No books found" };
    }

    return { success: true, count: data.length, data };
};
