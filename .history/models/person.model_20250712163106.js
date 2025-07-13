const mongoose = require("mongoose");
const { type } = require("os");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required:true,
    },
    work: {
        type
    }
})