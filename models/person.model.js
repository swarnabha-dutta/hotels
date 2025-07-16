const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


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
        enum:["Chef","Master Chef","Waiter","Manager"],
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
    username: {
        type: String,
        required:true,    
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


personSchema.pre('save', async function (next) {
    const person = this;
    // Hash the password only if it has been modified (or it is new record)
    if (!person.isModified('password')) return next();
    try {
        // hash password generation
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);
        person.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    } 
});



personSchema.methods.comparePassword = async function(candidatePassword){
    try {
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
const Person = mongoose.model("Person", personSchema);

module.exports = Person;