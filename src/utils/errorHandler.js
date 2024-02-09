// Rudimentary error handler
const errorHandler = async (err, req, res, next) => {
    if (err) {
        console.log("Error handler caught: ", err);
        res.status(500).json({ success: false, message: err.message });
    }

    next();
};

module.exports = errorHandler;
