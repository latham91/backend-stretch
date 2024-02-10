// Rudimentary error handler
const errorHandler = async (err, req, res, next) => {
    if (err) {
        res.status(err.statusCode).json({
            success: false,
            statusCode: err.statusCode,
            message: err.message,
            description: err.description,
        });
    }

    next();
};

module.exports = errorHandler;
