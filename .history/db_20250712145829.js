const mongoose = require("mongoose");

// mongodb URI 
const MONGODB_URI = "mongodb://localhost:27017/hotels"

// set up MongoDB connection 
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});