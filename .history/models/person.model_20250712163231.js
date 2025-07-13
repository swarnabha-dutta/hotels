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
        
    }
})