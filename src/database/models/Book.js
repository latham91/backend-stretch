const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            default: "Unknown",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
