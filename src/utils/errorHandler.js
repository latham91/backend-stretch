// Rudimentary error handler
const errorHandler = async (err, req, res, next) => {
    if (err) {
        res.status(err.statusCode).json({ success: false, message: err.message });
    }

    next();
};

module.exports = errorHandler;
