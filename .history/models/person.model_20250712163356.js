const mongoose = require("mongoose");

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
        type: String,
        required: true,
    },
    mobile: {
        type:Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minLength:[6,"minimum length of the email is minimum 6 "],
        maxLength: [250, "length of the email is maximum 250 "],
        trim:tre
    }
})