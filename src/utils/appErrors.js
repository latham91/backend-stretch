class APIError extends Error {
    constructor(message, statusCode, description, isOperational) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.message = message;
        this.statusCode = statusCode;
        this.description = description;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}

class NotFoundError extends APIError {
    constructor() {
        super("The requested data was not found", 404, "Not found", true);
    }
}

module.exports = {
    APIError,
    NotFoundError,
};
