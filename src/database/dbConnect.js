const mongoose = require("mongoose");
const { DB_URI } = require("../config");

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(DB_URI);

        console.log(`Connected to ${connection.connection.name} database`);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

module.exports = dbConnect;
