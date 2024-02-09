require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.MONGODB_URI,
};
