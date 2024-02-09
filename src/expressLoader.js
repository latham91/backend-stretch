const express = require("express");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");

const expressLoader = async (app) => {
    app.use(express.json());
    app.use(cors());

    // Error Handler
    app.use(errorHandler);
};

module.exports = expressLoader;
