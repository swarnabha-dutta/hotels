const mongoose = require("mongoose");

// mongodb URI 
// const MONGODB_URI_LOCAL= process.env.MONGODB_URI_LOCAL
const DB_URL = process.env.MONGODB_URI;// set up MongoDB connection

mongoose.connect(DB_URL);



const db = mongoose.connection;

// add event listener to see mongodb is added or not 
db.on("disconnected", (err) => {
    console.error("MongoDB connection is lost : Disconnected");
});

db.on("connected", () => {
    console.log("Connected to MongoDB Server");
});

// Export the database connection

module.exports = db;