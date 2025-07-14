const mongoose = require("mongoose");

// mongodb URI 
// const MONGODB_URI_LOCAL= process.env.MONGODB_URI_LOCAL
const DB_URL = process.env.MONGODB_URI;// set up MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1); // Stop the app if DB fails
    }
};

module.exports = connectDB;