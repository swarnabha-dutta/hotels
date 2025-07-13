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
        unique:true,
    },
    email: {
        type: String,
        required: true,
        minLength:[6,"minimum length of the email is minimum 6 "],
        maxLength: [250, "length of the email is maximum 250 "],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [6, "minimum length of the password is minimum 6 "],
        maxLength: [15, "maximum length of the password is maximum 15 "],
    },
    address: {
        type: String,
        required: true,
        
    },
    salary: {
        type: Number,
        required: true,
    }
})




const Person = mongoose.model()