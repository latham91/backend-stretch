const express = require("express");
const { PORT } = require("./config");
const dbConnect = require("./database/dbConnect");
const expressLoader = require("./expressLoader");

const startServer = async () => {
    const app = express();
    await dbConnect();
    await expressLoader(app);

    try {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup error:", error);
        process.exit(1);
    }
};

startServer();
