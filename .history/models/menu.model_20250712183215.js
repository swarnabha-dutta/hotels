const mongoose = require("mongoose");


const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required:true
    },
    price: {
        type: Number,
        required:true,
    },
    taste: {
        type: String,
        required:true,
    },
    is_drink: {
        type: Boolean,
    },
    ingredien

})