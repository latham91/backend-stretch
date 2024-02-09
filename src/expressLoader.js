const express = require("express");
const cors = require("cors");
const { books } = require("./api");
const errorHandler = require("./utils/errorHandler");

const expressLoader = async (app) => {
    app.use(express.json());
    app.use(cors());

    // Load API Routes
    books(app);

    // Error Handler
    app.use(errorHandler);
};

module.exports = expressLoader;
