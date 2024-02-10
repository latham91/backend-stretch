class APIError extends Error {
    constructor(description) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.message = "Internal Server Error";
        this.statusCode = 500;
        this.isOperational = true;
        Error.captureStackTrace(this);
    }
}

class NotFoundError extends APIError {
    constructor(message, statusCode) {
        super(message, statusCode);
        this.message = message;
        this.statusCode = 404;
    }
}

module.exports = {
    APIError,
    NotFoundError,
};
